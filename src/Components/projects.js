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
      className={"h-[25rem] w-[23rem] rounded-lg bg-white text-black"}
      onClick={openProject}
      // onMouseEnter={changeText}
      // onMouseLeave={changeBack}
    >
      <div class=" w-full bg-green-500  h-[12rem] rounded-b-none rounded-lg">
        <div></div>
      </div>
      <div className={"text-sm py-3 pl-5 "}>
        <h1 className="text-black font-medium" onClick={openProject}>
          {props.name}
        </h1>
        <br />
        <p>{props.desc}</p>
        <br />
        <button
          onClick={openProject}
          className="bg-transparent  hover:bg-cyan-700 text-cyan-700 font-semibold hover:text-white py-2 px-4 border border-cyan-700 hover:border-transparent rounded"
        >
          Open
        </button>
      </div>

      <br />
    </div>
  );
}
