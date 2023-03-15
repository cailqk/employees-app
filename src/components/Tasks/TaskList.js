import * as api from "../../requests/API";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import TaskItem from "./TaskItem";
import Button from "../UI/Button";

const TaskList = () => {
  const [tasks, setTasks] = useState("");
  const navigate = useNavigate();

  const onAddTask = () => {
    navigate("/tasks/add");
  };

  let url = "tasks?_expand=employee";

  useEffect(() => {
    api.get(url).then((res) => setTasks(res));
  }, []);

  return (
    <div className="container">
      <h1>Tasks</h1>
      <div className="text-end mb-2">
        <Button
          className="btn btn-success"
          onClick={onAddTask}
          name="Add Task"
        />
      </div>
      <TaskItem tasks={tasks} />
    </div>
  );
};

export default TaskList;
