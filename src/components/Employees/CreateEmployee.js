import * as api from "../../requests/API";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Button from "../UI/Button";

const CreateEmployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirtday] = useState("");
  const [salary, setSalary] = useState("");
  const [departmentId, setDepartmentId] = useState("");

  const [choose, setChoose] = useState([]);

  const navigate = useNavigate();

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

  const submitHandler = async (e) => {
    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      birthday === "" ||
      salary === "" ||
      departmentId === ""
    ) {
      window.alert("Please fill all the fields!");
    } else {
      await api.post("employees", {
        name,
        email,
        phone: Number(phone),
        birthday: new Date(birthday),
        salary: Number(salary),
        departmentId: Number(departmentId),
      });
      navigate("/employees");
    }
  };

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label className="form-label">Name</label>
            <input
              className="form-control"
              type="text"
              id="name-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            ></input>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="text"
              id="email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              className="form-control"
              type="number"
              id="phone-input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            ></input>
          </div>
          <div className="form-group">
            <label>Birthday</label>
            <input
              className="form-control"
              type="date"
              id="birthday-input"
              value={birthday}
              onChange={(e) => setBirtday(e.target.value)}
              required
            ></input>
          </div>
          <div className="form-group">
            <label>Salary</label>
            <input
              className="form-control"
              type="number"
              id="salary-input"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              required
            ></input>
          </div>
          <div>
            <label>Department</label>
            <select
              className="form-control"
              name="department"
              onChange={(e) => setDepartmentId(e.target.value)}
              required
            >
              <option value={departmentId}></option>
              {choose}
            </select>
          </div>
          <div className="text-end mt-3">
            <Button
              type="submit"
              className="btn btn-primary"
              name="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEmployee;
