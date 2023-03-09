import * as api from "../requests/API";
import { useState } from "react";
import { useNavigate } from "react-router";

const CreateEmployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [salary, setSalary] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      date === "" ||
      salary === ""
    ) {
      window.alert("Please fill all the fields!");
    } else {
      api.post("employee", {
        name,
        email,
        phone: Number(phone),
        date,
        salary: Number(salary),
      });
      navigate('/')
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label>Name</label>
        <input
          className="from-control"
          type="text"
          id="name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          className="from-control"
          type="text"
          id="email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input
          className="from-control"
          type="number"
          id="phone-input"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        ></input>
      </div>
      <div className="form-group">
        <label>Date</label>
        <input
          className="from-control"
          type="text"
          id="date-input"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
      </div>
      <div className="form-group">
        <label>Salary</label>
        <input
          className="from-control"
          type="number"
          id="salary-input"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        ></input>
      </div>
      <div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreateEmployee;
