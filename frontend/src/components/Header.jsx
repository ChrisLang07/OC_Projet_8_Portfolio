import { useEffect, useState } from "react";
import NavBar from '../components/NavBar';
import '../assets/scss/Main.scss';
import '../assets/scss/components/Header.scss';

export default function Header() {
  const[isVisible, setIsVisible] = useState(true);
  const[backGrndOn, setBackGrndOn] = useState(false);

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
