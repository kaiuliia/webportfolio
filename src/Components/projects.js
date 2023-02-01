import React from "react";
import "./projects.css";

export function Projects (props) {
 

  const openProject = () => {
    if (props.isEmpty) {
      return;
    } else {
      window.open(props.link);
    }
  }

 
    return (
      <div id="project" class="project" onClick={openProject}>
        <p class="projectname" onClick={openProject}>
          {props.name}
        </p>
        <p id='desc'>{props.desc}</p>
      </div>
    );
  }

