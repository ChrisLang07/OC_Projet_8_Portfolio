import NavBar from '../components/NavBar';
import '../assets/scss/Main.scss';
import '../assets/scss/components/Header.scss';

export default function Header() {
    return (
      <header className="container header">
        <div className="header-navbar">
          <NavBar />
        </div>
      </header>
    );
};