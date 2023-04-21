import { useState } from "react";
import "./experience.css";
import code from "../images/code.jpg";

export const Detail = [
  { id: 1, title: "test1", text: "This is test 1" },
  { id: 2, title: "test2", text: "This is test 2" },
  { id: 3, title: "test3", text: "This is test3" },
  { id: 4, title: "test4", text: "This is test4" },
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
          <p>
            0.2<h2>Where I’ve Worked</h2>
          </p>
        </div>
        <div className="content-container">
          <div className="left-content-container">
            <button
              className="active"
              onClick={() => handleButtonClick(Detail[0])}
            >
              Test1
            </button>
            <button onClick={() => handleButtonClick(Detail[1])}>
              Test2
            </button>
            <button onClick={() => handleButtonClick(Detail[2])}>
              Test3
            </button>
            <button onClick={() => handleButtonClick(Detail[3])}>
              Test4
            </button>
          </div>
          <div className="right-content-container" style={{ color: "white" }}>
            <h1>{content.title}</h1>
            <p>{content.text}</p>
          </div>
        </div>
      </div>
      <div className="container-03">
        <p>
          0.3<h2>Some Things I’ve Built</h2>
        </p>
        <div className="image-dis-container">
          <div className="content-03">
            <img className="img-1" src={code} alt="code" />
          </div>
          <div className="container-img-right">
            <p>A gaming site where we can buy and sell gamming products</p>
          </div>
        </div>
      </div>
    </>
  );
}
