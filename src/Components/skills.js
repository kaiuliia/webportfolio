import React from "react";
import "./skills.css";

export function Skills(props) {
  return (
    <div>
      <div className={"flex w-8 h-8 flex-col items-center"}>
        <img className="icon" src={props.icon} alt={""} />
        <h3>{props.name}</h3>
      </div>
    </div>
  );
}
