import * as api from "../../requests/API";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

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
        departmentId,
      });
      navigate("/employees");
    }
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label className="form-label">Name</label>
          <input
            className="form-control"
            type="text"
            id="name-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
          ></input>
        </div>
        <div>
          <label>Department</label>
          <select
            className="form-control"
            name="department"
            onChange={(e) => setDepartmentId(e.target.value)}
          >
            <option value={departmentId}></option>
            {choose}
          </select>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEmployee;
