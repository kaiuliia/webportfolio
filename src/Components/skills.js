import React from "react";
import "./skills.css";


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
