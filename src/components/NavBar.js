import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink className="navbar-brand" to="/">
        Navbar
      </NavLink>
      <NavLink className="nav-item nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-item nav-link" to="/add-employee">
        Add employee
      </NavLink>
      <NavLink className="nav-item nav-link" to="/add-task">
        Add Task
      </NavLink>
    </nav>
  );
};

export default NavBar;
