import "../components/experience.css";
import code from "../images/code.jpg";
import output from "../images/output.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
export default function Experience() {
  return (
    <>
      <div className="experience-container">
        <div className="title">
          <p>
            0.2<h2>Where I’ve Worked</h2>
          </p>
        </div>
        <div className="content-container"></div>
      </div>
      <div className="container-03">
        <p>
          0.3<h2>Some Things I’ve Built</h2>
        </p>
        <div className="content-03">
          <img className="img-1" src={code} alt="code" />
          <img className="img-2" src={output} alt="out" />
        </div>
        <div className="gitoo">
          <a href="#">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </>
  );
}
