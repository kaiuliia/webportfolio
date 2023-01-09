import React from "react";
import "./skills.css";
import html from "../resources/icons/html.png";
import css from "../resources/icons/css.png";
import vs from "../resources/icons/vs.png";
import git from "../resources/icons/git.png";
import node from "../resources/icons/node.png";
import react from "../resources/icons/react.png";
import js from "../resources/icons/js.png";

export function Skills(props) {
  return (
    <div id="wholeskill">
      <div id="one">
        <img class="icon" src={props.icon} />
        <h3>{props.name}</h3>
      </div>
    </div>
  );
}
