import "./App.css";
import { Route, Routes } from "react-router-dom";

import CreateEmployee from "./components/Employees/CreateEmployee";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Details from "./components/Employees/Details";
import CreateTask from "./components/Tasks/CreateTask";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/add-employee" element={<CreateEmployee />}></Route>
          <Route path="/employee/:id" element={<Details />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add-task" element={<CreateTask />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
