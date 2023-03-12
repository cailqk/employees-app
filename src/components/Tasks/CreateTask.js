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

  const submitHandler = async (e) => {
    e.preventDefault();

    if (
      title === "" ||
      description === "" ||
      dueDate === "" ||
      employeeId === ""
    ) {
      window.alert("Please fill all the fields!");
    } else {
     await api.post("tasks", {
        title,
        description,
        dueDate: new Date(dueDate).getTime(),
        employeeId: Number(employeeId),
        completed: ''
      });
      navigate("/tasks");
    }
  };

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
      <form onSubmit={submitHandler}>
      <div className="form-group">
        <label className="form-label">Title</label>
        <input
          className="form-control"
          type="text"
          id="name-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        ></input>
      </div>
      <div className="form-group">
        <label>Description</label>
        <input
          className="form-control"
          type="text"
          id="email-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></input>
      </div>
      <div className="form-group">
        <label>Due Date</label>
        <input
          className="form-control"
          type="date"
          id="phone-input"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        ></input>
      </div>
      <div>
        <label>Assign to</label>
        <select
          className="form-control"
          name="assignee"
          onChange={(e) => setEmployeeId(e.target.value)}
          required
        >
          <option value=""> </option>
          {employees}
        </select>
      </div>
      <div className="text-end mt-3">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
      </div>
    </div>
    
  );
};

export default CreateTask;
