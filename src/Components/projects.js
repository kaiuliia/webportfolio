import React, { useState } from "react";
import "./projects.css";

export function Projects(props) {
    const [text, setText] = useState(props.name);

  const openProject = () => {
    if (props.isEmpty) {
      return;
    } else {
      window.open(props.link);
    }
  };
  const changeText = () => {
    setText(props.desc);
  };

  const changeBack = () => {
    setText(props.name);
  };
const linkName = text;
  return (
    <div
      id="project"
      class="project"
      onClick={openProject}
      onMouseEnter={changeText}
      onMouseLeave={changeBack}
    >
      <p class="projectname" onClick={openProject}>
        {text}
      </p>
      {/* <p id="desc">{props.desc}</p> */}
    </div>
  );
}
