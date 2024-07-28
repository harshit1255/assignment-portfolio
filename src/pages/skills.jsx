import React from "react";
import { useEffect, useState } from "react";
import Skillcard from "../components/skillcard";
import Popup from "../components/popup";
function SKill() {
  const [skill, setskill] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state
  const [error, setError] = useState(null); // Add an error state
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/skills")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setskill(data);
        setLoading(false); // Set loading to false once data is fetched
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        setError(err); // Set error state if there's an error
        setLoading(false); // Set loading to false even if there's an error
      });
  }, [popup]);

  if (loading) {
    return <p>Loading...</p>; // Display loading message
  }

  if (error) {
    return <p>Error: {error.message}</p>; // Display error message
  }

  if (!skill || skill.length === 0) {
    return <p>No Skills available</p>; // Display message if no projects
  }

  return (
    <div className="project-section">
      <h2>Projects</h2>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        <br />
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>
      <div className="project-grid">
        {skill.map((item, index) => (
          <Skillcard skill={item} key={index}></Skillcard>
        ))}
      </div>
      <button className="addskill" onClick={() => setPopup(true)}>
        Add Skill
      </button>
      <Popup popup={popup} setPopup={setPopup}></Popup>
    </div>
  );
}

export default SKill;
