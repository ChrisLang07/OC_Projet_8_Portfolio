import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import '../assets/scss/components/NavBar.scss';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    // Fonction pour basculer l'état du menu (ouvert/fermé)
    const toggleMenu = (event) => {
      event.stopPropagation();
      setIsOpen(!isOpen);
    };

    // Fonction pour fermer le menu si un clic extérieur est détecté
    const closeMenuIfClickedOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    //Ajout d'un gestionnaire d'évenement
    useEffect(() => {
      document.addEventListener('click', closeMenuIfClickedOutside);
  
      return () => {
        document.removeEventListener('click', closeMenuIfClickedOutside);
      };
    }, []);

    return (
      <div className={`navbar ${isOpen ? "open" : ""}`}>
        <nav
          role="button"
          className={`navbar-hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-expanded={isOpen ? "true" : "false"}  
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </nav>

        <nav ref={menuRef} className={`navbar-links ${isOpen ? "open" : ""}`}>
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
}
