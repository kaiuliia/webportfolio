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

  const openLink = () => {
    window.location.replace(props.link);
  };

  const linkName = text;
  return (
    <a
      id="old"
      onMouseEnter={changeText}
      onMouseLeave={changeBack}
      onClick={openLink}
    >
      <h1 id="link">{text} </h1>
    </a>
  );
}
