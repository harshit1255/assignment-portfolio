import React from "react";
import rating from "../assets/Rating.jpg";
import profile from "../assets/Profile.jpg";
function ReviewCard({ data }) {
  return (
    <div className="reviewcard">
      <img src={rating}></img>
      <h4>{data.comment}</h4>
      <p>{data.content}</p>
      <div className="flex-review">
        <img src={profile}></img>
        <div>
          <h4>{data.name}</h4>
          <p>{data.occupation}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
