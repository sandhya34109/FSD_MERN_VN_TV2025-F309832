import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="nav">
      <h2 className="logo">College Portal</h2>
      <div className="links">
        <NavLink to="/" className="navlink">Home</NavLink>
        <NavLink to="/about" className="navlink">About</NavLink>
        <NavLink to="/departments" className="navlink">Departments</NavLink>
        <NavLink to="/contact" className="navlink">Contact</NavLink>
      </div>
    </nav>
  );
}

export default Header;
