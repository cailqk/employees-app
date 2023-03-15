import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-nav">
      
      <NavLink className="nav-item nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-item nav-link" to="/employees">
          Employees
        </NavLink>
        <NavLink className="nav-item nav-link" to="/tasks">
          Tasks
        </NavLink>
        <NavLink className="nav-item nav-link" to="/departments">
          Departments
        </NavLink>
      </div>
      <div className="navbar-nav position-absolute start-50 translate-middle-x">
      </div>
      <div className="navbar-nav position-absolute end-0">
      </div>
    </nav>
  );
};

export default NavBar;
