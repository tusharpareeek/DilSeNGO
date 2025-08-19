import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    "nav-link" + (isActive ? " active" : "");

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a className="brand" href="/">DilSe NGO</a>
        <nav className="nav-links" aria-label="Primary Navigation">
          <NavLink to="/" className={linkClass} end>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>

        </nav>
      </div>
    </header>
  );
}
