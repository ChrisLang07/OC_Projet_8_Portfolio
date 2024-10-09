import { useState } from "react";
import { NavLink } from "react-router-dom";
import '../assets/scss/NavBar.scss';

export default function NavBar() {
    const[isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
      setIsOpen(!isOpen)
    };


    return (
      <div className="navbar">
        <nav className={`navbar-hamburger ${isOpen? 'open' : ''}`} onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </nav>

        <nav className={`navbar-links ${isOpen? 'open' : ''}`}>
          <NavLink to="/" className="navbar-link">
            Home
          </NavLink>
          <NavLink to="about-me" className="navbar-link">
            About-me
          </NavLink>
          <NavLink to="skills" className="navbar-link">
            Skills
          </NavLink>
          <NavLink to="contact" className="navbar-link">
            Contact
          </NavLink>
        </nav>
      </div>
    );
};