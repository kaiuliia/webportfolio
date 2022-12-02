import React from "react";
import "./projects.css";

export class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.openProject = this.openProject.bind(this);
  }

  openProject() {
    if (this.props.isEmpty) {
      return;
    } else {
      window.open(this.props.link);
    }
  }

  render() {
    return (
      <div id="project" class="project" onClick={this.openProject}>
        <p class="projectname" onClick={this.openProject}>
          {this.props.name}
        </p>
      </div>
    );
  }
}
