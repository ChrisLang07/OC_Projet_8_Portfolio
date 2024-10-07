import { NavLink } from "react-router-dom";
import '../assets/scss/NavBar.scss';

export default function NavBar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className="navbar-link">Home</NavLink>
            <NavLink to="about-me" className="navbar-link">About-me</NavLink>
            <NavLink to="skills" className="navbar-link">Skills</NavLink>
            <NavLink to="contact" className="navbar-link">Contact</NavLink>
        </nav>
    )
};