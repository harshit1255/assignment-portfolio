import React from "react";
import Intro from "../components/intro";
import Projectsection from "../components/projectsection";
import Recommend from "../components/recommendations";
import Contact from "../components/contact";

function Home() {
  return (
    <div>
      <Intro></Intro>
      <Projectsection></Projectsection>
      <Recommend></Recommend>
      <Contact></Contact>
    </div>
  );
}

export default Home;
