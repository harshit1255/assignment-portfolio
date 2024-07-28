import React from "react";
import { useEffect, useState } from "react";
import ReviewCard from "./reviewcard";

function Recommend() {
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state
  const [error, setError] = useState(null); // Add an error state

  useEffect(() => {
    fetch("http://localhost:5000/comments")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setComments(data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((err) => {
        console.log(err);
        setError(err); // Set error state if there's an error
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);
  if (loading) {
    return <p>Loading...</p>; // Display loading message
  }

  if (error) {
    return <p>Error: {error.message}</p>; // Display error message
  }

  if (!comments || comments.length === 0) {
    return <p>No projects available.</p>; // Display message if no projects
  }
  return (
    <div className="project-section">
      <h2>Recommendations</h2>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        <br />
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>
      <div className="review-container">
        <div className="comments-section">
          {comments.map((item, index) => (
            <ReviewCard data={item} key={index}></ReviewCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recommend;
