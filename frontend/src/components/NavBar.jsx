import { useState } from "react";
import { NavLink } from "react-router-dom";
import '../assets/scss/components/NavBar.scss';

export default function NavBar() {
    const[isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
      setIsOpen(!isOpen)
    };


    return (
      <div className="navbar">
        <nav
          className={`navbar-hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </nav>

        <nav className={`navbar-links ${isOpen ? "open" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about-me"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
          >
            About-me
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
          >
            Skills
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    );
};