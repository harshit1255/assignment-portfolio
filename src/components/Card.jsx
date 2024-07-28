import React from "react";
import imgsrc from "../assets/projectimage.jpg";
import Tiles from "./tiles";
function Card({ details }) {
  //   console.log(details);
  return (
    <div className="project-tile">
      <img src={imgsrc}></img>
      <div>
        <h3>{details.title}</h3>
        <p>{details.content}</p>
        <div className="tile-grid">
          {details.tiles.map((item, index) => (
            <Tiles key={index} text={item}></Tiles>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
