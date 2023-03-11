import "./App.css";
import { Route, Routes } from "react-router-dom";

import CreateEmployee from "./components/Employees/CreateEmployee";
import GetEmployees from "./components/Employees/EmployeeList";
import NavBar from "./components/NavBar";
import EmployeeDetails from "./components/Employees/EmployeeDetails";
import CreateTask from "./components/Tasks/CreateTask";
import GetTasks from "./components/Tasks/TaskList";
import TaskDetails from "./components/Tasks/TaskDetails";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/employees/add" element={<CreateEmployee />}></Route>
          <Route path="/employees/:id" element={<EmployeeDetails />}></Route>
          <Route path="/employees" element={<GetEmployees />}></Route>
          <Route path="/tasks" element={<GetTasks />}></Route>
          <Route path="/tasks/add" element={<CreateTask />}></Route>
          <Route path='/tasks/:id' element={<TaskDetails />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
