import React from "react";
import { useState } from "react";
function Popup({ popup, setPopup }) {
  const [domain, setdomain] = useState("");
  const [skill1, setSkill1] = useState(["", ""]);
  const [skill2, setSkill2] = useState(["", ""]);
  const [skill3, setSkill3] = useState(["", ""]);
  const [skill4, setSkill4] = useState(["", ""]);
  const [skill5, setSkill5] = useState(["", ""]);

  const onclick = (e) => {
    e.preventDefault();
    let obj = { domain, skill1, skill2, skill3, skill4, skill5 };
    // if(skill1[0]=='' &&skill1[1])

    if (!domain && domain.trim() === "") {
      alert("please enter domain");
      return;
    }
    fetch("http://localhost:5000/skills", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Clear the form
        // alert("Successfull submited form data");
        setdomain("");
        setSkill1(["", ""]);
        setSkill2(["", ""]);
        setSkill3(["", ""]);
        setSkill4(["", ""]);
        setSkill5(["", ""]);
        setPopup(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className={popup === true ? "popup active" : "popup"}>
      <div className="popup-content">
        <h1>Add Skill</h1>
        <form>
          <label htmlFor="domain" style={{ fontWeight: "500" }}>
            Domain
          </label>
          <br></br>
          <div style={{ paddingBlock: "1rem" }}>
            <input
              value={domain}
              onChange={(e) => setdomain(e.target.value)}
              style={{ width: "80%" }}
              type="text"
              id="domain"
              placeholder="Front-end developer"
            ></input>
          </div>
          <br></br>
          <h3>Skills</h3>
          <div className="skill-labels">
            <span>Skill</span>
            <span>Proficiency</span>
          </div>
          <div className="skill-grid">
            <input
              type="text"
              value={skill1[0]}
              onChange={(e) => setSkill1([e.target.value, skill1[1]])}
            ></input>
            <input
              type="text"
              value={skill1[1]}
              onChange={(e) => setSkill1([skill1[0], e.target.value])}
            ></input>
            <input
              type="text"
              value={skill2[0]}
              onChange={(e) => setSkill2([e.target.value, skill2[1]])}
            ></input>
            <input
              type="text"
              value={skill2[1]}
              onChange={(e) => setSkill2([skill2[0], e.target.value])}
            ></input>
            <input
              type="text"
              value={skill3[0]}
              onChange={(e) => setSkill3([e.target.value, skill3[1]])}
            ></input>
            <input
              type="text"
              value={skill3[1]}
              onChange={(e) => setSkill3([skill3[0], e.target.value])}
            ></input>
            <input
              type="text"
              value={skill4[0]}
              onChange={(e) => setSkill4([e.target.value, skill4[1]])}
            ></input>
            <input
              type="text"
              value={skill4[1]}
              onChange={(e) => setSkill4([skill4[0], e.target.value])}
            ></input>
            <input
              type="text"
              value={skill5[0]}
              onChange={(e) => setSkill5([e.target.value, skill5[1]])}
            ></input>
            <input
              type="text"
              value={skill5[1]}
              onChange={(e) => setSkill5([skill5[0], e.target.value])}
            ></input>
          </div>
          <div className="button-flex">
            <button onClick={onclick} type="submit">
              Add Skill
            </button>
            <button onClick={() => setPopup(false)} type="button">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Popup;
