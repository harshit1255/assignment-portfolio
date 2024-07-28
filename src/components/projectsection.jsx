import React, { useState, useEffect } from "react";
import Card from "./Card";

function Projectsection() {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state
  const [error, setError] = useState(null); // Add an error state

  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProject(data);
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

  if (!project || project.length === 0) {
    return <p>No projects available.</p>; // Display message if no projects
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
        {project.map((item, index) => (
          <Card key={index} details={item} />
        ))}
      </div>
    </div>
  );
}

export default Projectsection;
