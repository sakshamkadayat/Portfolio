import "../components/about.css";
import saksham from "../images/pp.jpg";
export default function About() {
  return (
    <div className="about-container">
      <div className="head-section">
        <p>0.1</p>
        <h3 className="global-font">About Me</h3>
      </div>
      <div className="container-middle">
        <p className="para global-font">
          Hi, I'm Saksham Kadayat, a front-end web developer with 1 years of
          experience creating beautiful and functional user interfaces using
          React.js. My skills in HTML, CSS, React JS, and JavaScript allow me to
          design and build intuitive and responsive web pages that adapt
          seamlessly to different devices. I take pride in writing clean,
          maintainable code and collaborating with other developers and
          designers to deliver high-quality solutions that exceed user
          expectations. Let's build something great together!
        </p>
        <div className="image-overlay"></div>
        <div className="back-overlay"></div>
        <img src={saksham} alt="photo" className="photo" />

      </div>
    </div>
  );
}
