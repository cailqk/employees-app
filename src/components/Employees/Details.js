import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import * as api from "../../requests/API";

const Details = () => {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [salary, setSalary] = useState("");

  useEffect(() => {
    api.get("employees/" + id).then((res) => {
      setName(res.name);
      setEmail(res.email);
      setPhone(res.phone);
      setDate(res.date);
      setSalary(res.salary);
      setEmployee(res);
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
        console.log(res);
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
        date,
        salary,
      })
      .then((res) => {
        console.log(res);
        navigate("/employees");
      });
  };

  const cancelHandler = (e) => {
    e.preventDefault();
    navigate("/employees");
  };

  return (
    <div>
      <h1>Details for '{employee.name}'</h1>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input
            className="from-control"
            type="text"
            id="name-input"
            defaultValue={employee.name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            className="from-control"
            type="text"
            id="email-input"
            defaultValue={employee.email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            className="from-control"
            type="number"
            id="phone-input"
            defaultValue={employee.phone}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            className="from-control"
            type="text"
            id="date-input"
            defaultValue={employee.date}
            onChange={(e) => setDate(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label>Salary</label>
          <input
            className="from-control"
            type="number"
            id="salary-input"
            defaultValue={employee.salary}
            onChange={(e) => setSalary(e.target.value)}
          ></input>
        </div>
        <div>
          <button type="submit" className="btn btn-success" onClick={editHandler}>
            Save
          </button>
          <button type="submit" className="btn btn-danger" onClick={deleteHandler}>
            Delete
          </button>
          <button type="submit" className="btn btn-secondary" onClick={cancelHandler}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Details;
