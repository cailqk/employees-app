import "./App.css";
import { Route, Routes } from "react-router-dom";

import CreateEmployee from "./components/Employees/CreateEmployee";
import NavBar from "./components/Core/NavBar";
import EmployeeDetails from "./components/Employees/EmployeeDetails";
import CreateTask from "./components/Tasks/CreateTask";
import TaskDetails from "./components/Tasks/TaskDetails";
import Home from "./components/Core/Home";
import DepartmentList from "./components/Departments/DepartmentList";
import CreateDepartment from "./components/Departments/CreateDepartment";
import TaskList from "./components/Tasks/TaskList";
import EmployeeList from "./components/Employees/EmployeeList";
import DepartmentDetails from "./components/Departments/DepartmentDetails";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/employees" element={<EmployeeList />}></Route>
          <Route path="/employees/add" element={<CreateEmployee />}></Route>
          <Route path="/employees/:id" element={<EmployeeDetails />}></Route>
          <Route path="/tasks" element={<TaskList />}></Route>
          <Route path="/tasks/add" element={<CreateTask />}></Route>
          <Route path='/tasks/:id' element={<TaskDetails />}></Route>
          <Route path="/departments" element={<DepartmentList />}></Route>
          <Route path="/departments/add" element={<CreateDepartment />}></Route>
          <Route path="/departments/:id" element={<DepartmentDetails />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
