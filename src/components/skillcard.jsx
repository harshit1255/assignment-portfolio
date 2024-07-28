import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
function Skillcard({ skill }) {
  const { domain, skill1, skill2, skill3, skill4, skill5 } = skill;
  console.log(domain, skill1, skill2, skill3, skill4, skill5);
  return (
    <div className="skillcard">
      <h2>{domain}</h2>
      {skill1[0] ? (
        <div>
          <span>{skill1[0]}</span>
          <span>{skill1[1]}%</span>
          <ProgressBar
            completed={Number(skill1[1])}
            bgColor="rgb(255, 180, 0)"
            customLabel=" "
            height="6px"
          ></ProgressBar>
        </div>
      ) : (
        <div></div>
      )}
      {skill2[0] ? (
        <div>
          <span>{skill2[0]}</span>
          <span>{skill2[1]}%</span>
          <ProgressBar
            completed={Number(skill2[1])}
            customLabel=" "
            bgColor="rgb(255, 180, 0)"
            height="6px"
          ></ProgressBar>
        </div>
      ) : (
        <div></div>
      )}
      {skill3[0] ? (
        <div>
          <span>{skill3[0]}</span>
          <span>{skill3[1]}%</span>
          <ProgressBar
            completed={Number(skill3[1])}
            customLabel=" "
            height="6px"
            bgColor="rgb(255, 180, 0)"
          ></ProgressBar>
        </div>
      ) : (
        <div></div>
      )}
      {skill4[0] ? (
        <div>
          <span>{skill4[0]}</span>
          <span>{skill4[1]}%</span>
          <ProgressBar
            completed={Number(skill4[1])}
            bgColor="rgb(255, 180, 0)"
            height="6px"
            customLabel=" "
          ></ProgressBar>
        </div>
      ) : (
        <div></div>
      )}
      {skill5[0] ? (
        <div>
          <span>{skill5[0]}</span>
          <span>{skill5[1]}%</span>
          <ProgressBar
            bgColor="rgb(255, 180, 0)"
            completed={Number(skill5[1])}
            height="6px"
            customLabel=" "
          ></ProgressBar>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Skillcard;
