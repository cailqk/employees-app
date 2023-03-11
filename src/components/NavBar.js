import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink className="nav-item nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-item nav-link" to="/employees">
        Employees
      </NavLink>
      <NavLink className="nav-item nav-link" to="/employees/add">
        Add employee
      </NavLink>
      <NavLink className="nav-item nav-link" to="/tasks">
        Tasks
      </NavLink>
      <NavLink className="nav-item nav-link" to="/tasks/add">
        Add Task
      </NavLink>
    </nav>
  );
};

export default NavBar;
