import { useEffect, useState } from "react";
import NavBar from '../components/NavBar';
import '../assets/scss/Main.scss';
import '../assets/scss/components/Header.scss';

export default function Header() {
  const[isVisible, setIsVisible] = useState(true); // Déclaration de l'état pour déterminer si le header est visible ou non
  const[backGrndOn, setBackGrndOn] = useState(false); // Déclaration de l'état pour activer/désactiver le fond du header

   // Fonction qui gère les changements de visibilité et de fond lors du scroll
  const handleScrolly = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 0 && currentScrollY < 500) {
      setIsVisible(false);
      setBackGrndOn(false);
    
    } else if (currentScrollY > 500) {
     setIsVisible(true);
     setBackGrndOn(true);

    } else {
      setIsVisible(true);
      setBackGrndOn(false);
    }

  };

  //Ajout d'un gestionnaire d'évenement
  useEffect(() => {
    window.addEventListener('scroll', handleScrolly);

    return () => {
      window.removeEventListener('scroll', handleScrolly);
    };
  }, []);

  return (
    <header className={`container header ${isVisible ? 'visible' : ''} ${backGrndOn? 'background-on' : ''}`}>
      <div className='header-navbar'>
        <NavBar />
      </div>
    </header>
  );
}
