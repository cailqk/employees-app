import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import * as api from "../../requests/API";
import Button from "../UI/Button";

const EmployeeDetails = () => {
  let urlExt = "?_embed=tasks&_expand=department";
  const [employee, setEmployee] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [salary, setSalary] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [tasks, setTasks] = useState([]);

  const [choose, setChoose] = useState([]);

  useEffect(() => {
    api.get("employees/" + id + urlExt).then((res) => {
      const birthday = new Date(res.birthday);
      setName(res.name);
      setEmail(res.email);
      setPhone(res.phone);
      setBirthday(birthday.toDateString());
      setSalary(res.salary);
      setDepartmentId(res.department.name);
      setEmployee(res);
      setTasks(res.tasks);
    });
  }, []);

  useEffect(() => {
    api.get("departments").then((res) => {
      const info = [];
      res.forEach((el) =>
        info.push(
          <option key={el.id} value={el.id}>
            {el.name}
          </option>
        )
      );
      setChoose(info);
    });
  }, []);

  const deleteHandler = (e) => {
    e.preventDefault();

    if (
      window.confirm(
        "Would you really like to delete this employee from the list ?"
      ) === true
    ) {
      api.del("employees/" + employee.id).then((res) => {
        navigate("/employees");
      });
    } else {
      console.log("no");
    }
  };

  const editHandler = (e) => {
    e.preventDefault();

    api
      .patch("employees/" + employee.id, {
        name,
        email,
        phone,
        birthday: new Date(birthday),
        salary,
        departmentId: Number(departmentId),
      })
      .then((res) => {
        navigate("/employees");
      });
  };

  const cancelHandler = (e) => {
    e.preventDefault();
    navigate("/employees");
  };

  return (
    <div className="row">
      <div className="col-md-6 offset-3">
        <h1>Details for '{employee.name}'</h1>
        <form>
          <div className="form-group">
            <label className="form-label">Name</label>
            <input
              className="form-control"
              type="text"
              id="name-input"
              defaultValue={employee.name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="text"
              id="email-input"
              defaultValue={employee.email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              className="form-control"
              type="number"
              id="phone-input"
              defaultValue={employee.phone}
              onChange={(e) => setPhone(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label>Birthday</label>
            <input
              className="form-control"
              type="text"
              id="date-input"
              defaultValue={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label>Salary $</label>
            <input
              className="form-control"
              type="number"
              id="salary-input"
              defaultValue={employee.salary}
              onChange={(e) => setSalary(e.target.value)}
            ></input>
          </div>
          <div>
            <label>Department</label>
            <select
              name="department"
              onChange={(e) => setDepartmentId(e.target.value)}
              className="form-control"
            >
              <option>{departmentId}</option>
              {choose}
            </select>
          </div>
          <div>
            <ul className="form-group">
              {tasks.length === 0 && <li>No current tasks</li>}
              {tasks.length !== 0 &&
                tasks.map((el) => {
                  const due = new Date(el.dueDate).toDateString();
                  return (
                    <li key={el.id}>
                      {el.title} - {due}
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="text-end">
            <Button
              type="submit"
              className="btn btn-success me-1"
              onClick={editHandler}
              name="Save"
            />
            <Button
              type="submit"
              className="btn btn-danger me-1"
              onClick={deleteHandler}
              name="Delete"
            />
            <Button
              type="submit"
              className="btn btn-secondary"
              onClick={cancelHandler}
              name="Cancel"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeDetails;
