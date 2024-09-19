import React, { useState } from "react";
import "./projects.css";

export function Projects({ name, link, desc, img, noButton }) {
  const [text, setText] = useState(name);

  const openProject = () => {
    if (noButton) {
      return;
    } else {
      window.open(link);
    }
  };
  const changeText = () => {
    setText(desc);
  };

  const changeBack = () => {
    setText(name);
  };
  const linkName = text;
  return (
    <div
      className={"h-fit min-h-[450px] w-auto rounded-lg bg-white text-black"}
      onClick={openProject}
      // onMouseEnter={changeText}
      // onMouseLeave={changeBack}
    >
      <div className="w-full bg-black-500 h-[15rem]  rounded-b-none rounded-t-lg rounded-lg">
        <div
          className="h-[100%] bg-cover bg-center  rounded-t-lg bg-no-repeat w-full z-100"
          style={{
            backgroundImage: `url(${img})`,
          }}
        ></div>
      </div>
      <div className={"text-sm py-3 px-5 "}>
        <h1 className="text-black font-medium" onClick={openProject}>
          {name}
        </h1>
        <br />
        <p>{desc}</p>
        <br />
        {!noButton && (
          <button
            onClick={openProject}
            className="bg-transparent  hover:bg-cyan-700 text-cyan-700 font-semibold hover:text-white py-2 px-4 border border-cyan-700 hover:border-transparent rounded"
          >
            Open
          </button>
        )}
        {noButton && (
          <div className={"font-medium text-cyan-700"}>Coming soon</div>
        )}
      </div>

      <br />
    </div>
  );
}
