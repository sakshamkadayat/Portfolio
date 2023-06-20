import "./home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import * as LottiePlayer from "@lottiefiles/lottie-player";
export default function Home() {
  return (
    <>
      <div className="big-container">
        <div className="container-home">
          <div className="container-social">
            <ul>
              <li>
                <a href="#">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>

              <hr class="vertical" />
            </ul>
          </div>
          <div className="content global-font">
            <p>Hi, my name is </p>
            <h1>Saksham Kadayat.</h1>
            <h2>I build things for the web.</h2>
          </div>
          <div className="animation-container">
            <lottie-player
              autoplay
              loop
              mode="normal"
              src="https://assets6.lottiefiles.com/packages/lf20_w51pcehl.json"
              style={{ width: "90%"  }}
            ></lottie-player>
          </div>
          <div className="container-right">
            <p className="vert">
              <a href="#">sakshamkadayat@gmail.com</a>
            </p>
            <hr class="right" />
          </div>
        </div>
      </div>
    </>
  );
}
