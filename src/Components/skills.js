import React from "react";
import "./skills.css";
import lkdn from '../resources/icons/fb.png';


export class Skills extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div id="skills">
      
        <div class="skillname">
          <p>HTML</p>
          <img class="icon" src={lkdn} />
          
          <p>HTML</p>
          <img class="icon" src={lkdn} />
        </div>
      </div>
    );
  }
}
