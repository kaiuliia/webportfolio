import React from "react";
import "./projects.css";

export class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="projectone" class="project">
        <p class="projectname">{this.props.name}</p>
        <button onClick={}>View</button>
      </div>
    );
  }
}
