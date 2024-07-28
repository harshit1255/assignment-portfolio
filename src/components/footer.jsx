import React from "react";
import logo1 from "../assets/logo1.jpg";
import logo2 from "../assets/logo2.jpg";
import logo3 from "../assets/logo3.jpg";
import logo4 from "../assets/logo4.jpg";
import Img1 from "../assets/1.svg";
import footer1 from "../assets/footer1.jpg";
import footer2 from "../assets/footer2.jpg";
import footer3 from "../assets/footer3.jpg";
import lastimage1 from "../assets/last1.jpg";
import lastimage2 from "../assets/last2.jpg";
import lastimage3 from "../assets/last3.jpg";

function Footer() {
  return (
    <div style={{ backgroundColor: "rgb(240, 240, 246)" }}>
      <div className="footer-logo">
        <img src={logo1}></img>
        <img src={logo2}></img>
        <img src={logo3}></img>
        <img src={logo4}></img>
      </div>
      <img src={Img1} style={{ paddingLeft: "4rem" }}></img>
      <div className="footer-flex">
        <div className="footer-link-conatiner">
          <img src={footer1}></img>
          <img src={footer2}></img>
          <img src={footer3}></img>
        </div>
        <div className="footer-link-conatiner">
          <h2>Quick Links</h2>
          <span>Home</span>
          <span>Skills</span>
          <span>Education</span>
          <span>Project</span>
          <span>Recommendations</span>
        </div>
        <div className="footer-link-conatiner">
          <h2>Portfolio</h2>
          <span>Frontend Development</span>
          <span>Backend Development</span>
          <span>Website Design</span>
          <span>Machine Learning</span>
          <span>Problem Solving & DSA</span>
        </div>
        <div className="footer-link-conatiner">
          <h2>Connect</h2>
          <img src={lastimage1}></img>
          <img src={lastimage2}></img>
          <img src={lastimage3}></img>
        </div>
      </div>

      <p style={{ textAlign: "center", color: "grey", paddingBlock: "2rem" }}>
        © 2024 Copyright, All right reserved
      </p>
    </div>
  );
}

export default Footer;
