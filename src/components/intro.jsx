import React from "react";
import Img from "../assets/intro.jpg";
function Intro() {
  return (
    <div className="intro">
      <div className="right-intro">
        <h2>
          I'm Ryan Adlrdard <br></br>{" "}
          <span className="se">Frontend developer</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
          feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
          lectus.
        </p>
        <button className="intro-button">HIRE ME →</button>
      </div>
      <img src={Img}></img>
    </div>
  );
}

export default Intro;
