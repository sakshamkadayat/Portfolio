import "./navbar.css";
import logo from "../../images/logo.png";
export default function Navbar() {
  return (
    <>
      <div className="nav-list-container">
        <img src={logo} alt="logo" />
        <div className="menu-container">
          <ul>
            <li>
              <a href="#">
                <p>0.1</p>Home
              </a>
            </li>
            <li>
              <a href="#">
                <p>02.</p>Experience
              </a>
            </li>
            <li>
              <a href="#">
                <p>03.</p>Work
              </a>
            </li>
            <li>
              <a href="#">
                <p>04.</p>Contact
              </a>
            </li>
          </ul>
        </div>
        <button className="btn">Resume</button>
      </div>
    </>
  );
}
