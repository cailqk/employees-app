import { useNavigate } from "react-router";
import * as api from "../../requests/API";

const { useState } = require("react");

const CreateTask = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (title === "" || description === "" || dueDate === "") {
      window.alert("Please fill all the fields!");
    } else {
      api.post("tasks", {
        title,
        description,
        dueDate,
      });
      navigate("/");
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
          type="text"
          id="phone-input"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
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

export default CreateTask;
