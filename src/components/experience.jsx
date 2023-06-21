import { useState } from "react";
import "./experience.css";
import code from "../images/code.jpg";
import Saksham from "../images/code.png";
import Saksham_A from "../images/cipher.png";
import Saksham_B from "../images/upwork.png";
import Digital from "../images/output.png";

export const Detail = [
  {
    id: 1,
    title: "The Cipher Bit",
    text: "Working as @Frontend Devleoper",
    Image: Saksham_A,
  },
  {
    id: 2,
    title: "Code Station",
    text: "Working as @Frontend Devleoper",
    Image: Saksham,
  },
  { id: 3, title: "Upwork", text: "Working as @Data Entry", Image: Saksham_B },
];

export default function Experience() {
  const [content, setContent] = useState(Detail[0]);

  function handleButtonClick(data) {
    setContent(data);
  }

  return (
    <>
      <div className="experience-container">
        <div className="title">
          <p className="global-font">
            0.2<h2>Where I’ve Worked</h2>
          </p>
        </div>
        <div className="content-container">
          <div className="left-content-container">
            <button
              className="active"
              onClick={() => handleButtonClick(Detail[0])}
            >
              The Cipher Bit
            </button>
            <button onClick={() => handleButtonClick(Detail[1])}>
              Code Station
            </button>
            <button onClick={() => handleButtonClick(Detail[2])}>Upwork</button>
          </div>
          <div
            className="right-content-container global-font"
            style={{ color: "white" }}
          >
            <h1>
              {content.title}
              <img src={content.Image} alt="logo" />
            </h1>

            <p>{content.text}</p>
          </div>
        </div>
      </div>
      <div className="container-03">
        <p>
          0.3<h2 className="global-font">Some Things I’ve Built</h2>
        </p>
        <div className="image-dis-container">
          <div className="content-03">
            <img className="img-1" src={code} alt="code" />
          </div>
          <div className="container-img-right global-font">
            <p>
              I have developed an exciting gaming site that serves as a
              marketplace for buying and selling various gaming products. Our
              platform offers a wide range of items such as gift cards, gaming
              coins, and much more. Explore our website to find the perfect
              gaming products to enhance your gaming experience, whether you are
              a buyer or a seller.
            </p>
          </div>
        </div>
      </div>
      <div className="container-digital-den-main">
        <div className="container-left-digital">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia consequatur laboriosam quibusdam, fugiat itaque, ut eligendi beatae et quaerat, dolor eaque nam excepturi incidunt non pariatur optio delectus vel ad!</p>
        </div>
        <div className="container-right-digital">
          <img src={Digital} alt="img" />
        </div>
      </div>
    </>
  );
}
