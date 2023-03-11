import { useNavigate } from "react-router";
import * as api from "../../requests/API";

const { useState, useEffect } = require("react");

const CreateTask = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [employeeId, setEmployeeId] = useState("");

  useEffect(() => {
    api.get("employees").then((res) => {
      const info = [];
      res.forEach((el) =>
        info.push(
          <option key={el.id} value={el.id}>
            {el.name}
          </option>
        )
      );
      setEmployees(info);
    });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      title === "" ||
      description === "" ||
      dueDate === "" ||
      employeeId === ""
    ) {
      window.alert("Please fill all the fields!");
    } else {
      api.post("tasks", {
        title,
        description,
        dueDate: new Date(dueDate),
        employeeId: Number(employeeId),
      });
      navigate("/tasks");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label>Title</label>
        <input
          className="from-control"
          type="text"
          id="name-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </div>
      <div className="form-group">
        <label>Description</label>
        <input
          className="from-control"
          type="text"
          id="email-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
      </div>
      <div className="form-group">
        <label>Due Date</label>
        <input
          className="from-control"
          type="date"
          id="phone-input"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Assign to</label>
        <select
          className="from-control"
          name="assignee"
          onChange={(e) => setEmployeeId(e.target.value)}
        >
          <option value=""> </option>
          {employees}
        </select>
      </div>
      <div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreateTask;
