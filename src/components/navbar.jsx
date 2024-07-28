import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../assets/1.svg";
import { useState } from "react";

function Navbar() {
  const [activelink, setActivelink] = useState("home");
  return (
    <div className="navbar">
      <img src={Img1}></img>
      <div>
        <Link
          className="link"
          to="/"
          style={{
            backgroundColor: activelink === "home" ? "rgb(255,180,0)" : "white",
          }}
          onClick={() => setActivelink("home")}
        >
          <span>Home</span>
        </Link>
        <Link
          className="link"
          to="/skills"
          style={{
            backgroundColor:
              activelink === "skills" ? "rgb(255,180,0)" : "white",
          }}
          onClick={() => setActivelink("skills")}
        >
          <span>Skills</span>
        </Link>
        <span
          className="link dec"
          style={{
            backgroundColor: activelink === "edu" ? "rgb(255,180,0)" : "white",
          }}
          onClick={() => setActivelink("edu")}
        >
          Educations
        </span>
        <span
          className="link dec"
          style={{
            backgroundColor:
              activelink === "projects" ? "rgb(255,180,0)" : "white",
          }}
          onClick={() => setActivelink("projects")}
        >
          projects
        </span>
        <span
          className="link dec"
          style={{
            backgroundColor:
              activelink === "recom" ? "rgb(255,180,0)" : "white",
          }}
          onClick={() => setActivelink("recom")}
        >
          recommendations
        </span>
        <span
          className="link dec"
          style={{
            backgroundColor:
              activelink === "contact" ? "rgb(255,180,0)" : "white",
          }}
          onClick={() => setActivelink("contact")}
        >
          contact
        </span>
      </div>
    </div>
  );
}

export default Navbar;
