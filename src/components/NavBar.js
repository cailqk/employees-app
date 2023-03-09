import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        Navbar
      </NavLink>
      <NavLink className="nav-item nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-item nav-link" to="/add-employee">
        Add
      </NavLink>
    </nav>
  );
};

export default NavBar;
