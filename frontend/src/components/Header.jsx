import NavBar from '../components/NavBar';
import '../assets/scss/Main.scss';
import '../assets/scss/Header.scss';

export default function Header() {
    return (
      <header className="container">
        <div className="header-navbar">
          <NavBar />
        </div>
      </header>
    );
};