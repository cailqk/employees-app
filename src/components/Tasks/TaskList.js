import * as api from "../../requests/API";

import { useState, useEffect } from "react";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const [tasks, setTasks] = useState("");

  let url = "tasks?_expand=employee";

  useEffect(() => {
    api.get(url).then((res) => setTasks(res));
  }, []);

  return (
    <div className="container">
      <h1>Tasks</h1>
      <TaskItem tasks={tasks} />
    </div>
  );
};

export default TaskList;
