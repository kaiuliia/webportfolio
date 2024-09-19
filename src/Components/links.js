import React, { useState } from "react";
import "./links.css";

export function Links(props) {
  const [text, setText] = useState(props.name);

  const changeText = () => {
    setText(props.alt);
  };

  const changeBack = () => {
    setText(props.name);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      id="old"
      onMouseEnter={changeText}
      onMouseLeave={changeBack}
      onClick={() => handleScroll(props.link)}
    >
      <h1 id="link">{text} </h1>
    </a>
  );
}
