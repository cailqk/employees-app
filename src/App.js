import "./App.css";
import { Route, Routes } from "react-router-dom";

import CreateEmployee from "./components/Employees/CreateEmployee";
import ShowAllEmployees from "./components/Employees/ShowAllEmployees";
import NavBar from "./components/NavBar";
import Details from "./components/Employees/Details";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/add-employee" element={<CreateEmployee />}></Route>
          <Route path="/employee/:id" element={<Details />}></Route>
          <Route path="/" element={<ShowAllEmployees />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
