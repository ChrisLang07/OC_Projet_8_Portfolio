import { useEffect, useState, useRef } from "react";
import NavBar from '../components/NavBar';
import '../assets/scss/Main.scss';
import '../assets/scss/components/Header.scss';

export default function Header() {
  const[isVisible, setIsVisible] = useState(true);
  const[backGrndOn, setBackGrndOn] = useState(false);
  let lastScrollY = 0;

  const handleScrolly = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 0 && currentScrollY < 900) {
      setIsVisible(false);
      setBackGrndOn(false);
    
    } else if (currentScrollY > 900) {
     setIsVisible(true);
     setBackGrndOn(true);

    } else {
      setIsVisible(true);
      setBackGrndOn(false);
    }

    lastScrollY = currentScrollY;
  };

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
