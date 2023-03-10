import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import * as api from "../../requests/API";

const TaskDetails = () => {
  let urlExt = "?_expand=employee"
  const [task, setTask] = useState("");
  const { id } = useParams();
  const [employees, setEmployees] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [employeeName, setEmployeeName] = useState("");

  const navigate = useNavigate();

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

  useEffect(() => {
    api.get("tasks/" + id + urlExt).then((res) => {
      setTitle(res.title);
      setDescription(res.description);
      setDueDate(res.dueDate);
      setEmployeeId(res.employee.id);
      setEmployeeName(res.employee.name)
      setTask(res);
    });
  }, []);

  const cancelHandler = (e) => {
    e.preventDefault();

    navigate("/tasks");
  };

  const editHandler = (e) => {
    e.preventDefault();

    api.patch("tasks/" + task.id, {
      title,
      description,
      dueDate,
      employeeId: Number(employeeId),
    });

    navigate("/tasks");
  };

  const deleteHandler = (e) => {
    e.preventDefault();

    if (
      window.confirm(
        "Would you really like to delete this task from the board ?"
      ) === true
    ) {
      api.del("tasks/" + task.id)
      .then((res) => {
        console.log(res);
        navigate("/tasks");
      });
    } else {
      console.log("no");
    }
  };

  return (
    <div>
      <h1>Details for '{task.title}'</h1>
      <form>
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
            type="text"
            id="phone-input"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label>Assigned to</label>
          <select
            className="from-control"
            name="employeeId"
            onChange={(e) => setEmployeeId(e.target.value)}
          >
            <option value="">{employeeName}</option>
            {employees}
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-success"
            onClick={editHandler}
          >
            Save
          </button>
          <button
            type="submit"
            className="btn btn-danger"
            onClick={deleteHandler}
          >
            Delete
          </button>
          <button
            type="submit"
            className="btn btn-secondary"
            onClick={cancelHandler}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskDetails;
