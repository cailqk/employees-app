import "./App.css";
import { Route, Routes } from "react-router-dom";

import CreateEmployee from "./components/CreateEmployee";
import ShowAllEmployees from "./components/ShowAllEmployees";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/add-employee" element={<CreateEmployee />}></Route>
          <Route path="/" element={<ShowAllEmployees />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
