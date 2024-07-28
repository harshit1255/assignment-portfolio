import React from "react";
import { useState } from "react";
import image from "../assets/contact1.jpg";
function Contact() {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setmessage] = useState("");

  const onclick = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      name.trim() === "" ||
      name === null ||
      email.trim() === "" ||
      email === null
    ) {
      alert("please fill required fields");
      return;
    }
    if (!emailPattern.test(email)) {
      alert("please enter a valid email");
      return;
    }
    let messageinfo = { name, email, subject, message };
    fetch("http://localhost:5000/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageinfo),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Clear the form
        alert("Successfull submited form data");
        setEmail("");
        setname("");
        setmessage("");
        setSubject("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="contact-flex">
      <div>
        <h2>Leave Your Message</h2>
        <form className="contact-form">
          <label htmlFor="name">Your Full Name(Required)</label>
          <input
            type="text"
            id="name"
            required
            value={name}
            onChange={(e) => setname(e.target.value)}
          ></input>
          <label htmlFor="email">Your Email (Required)</label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          ></input>
          <label htmlFor="message">Your Message</label>
          <input
            type="text"
            id="message"
            value={message}
            onChange={(e) => setmessage(e.target.value)}
          ></input>
          <button type="submit" onClick={onclick}>
            Send Message
          </button>
        </form>
      </div>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <div className="contact-card">
          <div className="image-section">
            <i className="fa-regular fa-map"></i>
          </div>
          <div className="info-flex">
            <span>Country:</span>
            <span>Bangladesh</span>
          </div>
          <div className="info-flex">
            <span>City:</span>
            <span>Dhaka</span>
          </div>
          <div className="info-flex">
            <span>Street:</span>
            <span>35 vhatara, Badda</span>
          </div>
        </div>
        <div className="contact-card">
          <div className="image-section">
            <i class="fa-solid fa-envelope"></i>
          </div>
          <div className="info-flex">
            <span>Email:</span>
            <span>youremail@gmail.com</span>
          </div>
          <div className="info-flex">
            <span>Skype:</span>
            <span>@yourusername</span>
          </div>
          <div className="info-flex">
            <span>Telegram:</span>
            <span>@yourusername</span>
          </div>
        </div>
        <div className="contact-card">
          <div className="image-section">
            <i class="fa-solid fa-phone"></i>
          </div>
          <div className="info-flex">
            <span>Services:</span>
            <span>15369</span>
          </div>
          <div className="info-flex">
            <span>Office:</span>
            <span>+58 (021)356 587 235</span>
          </div>
          <div className="info-flex">
            <span>Personal:</span>
            <span>+58 (021)356 587 235</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
