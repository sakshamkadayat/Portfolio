import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
// import logo from "../../images/logo.png";
export default function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <h3>LOGO</h3>
      <nav ref={navRef}>
        <a href="/#">
          <span style={{ color: "#62feda" }}>0.1</span>Home
        </a>
        <a href="/#">
          <span style={{ color: "#62feda" }}>0.2</span>Experience
        </a>
        <a href="/#">
          <span style={{ color: "#62feda" }}>0.3</span>Work
        </a>
        <a href="/#">
          <span style={{ color: "#62feda" }}>0.4</span>Contact
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}
