import React from "react";
import "./projects.css";


export class Projects extends React.Component {
  constructor(props) {
    super(props);
     this.openProject = this.openProject.bind(this);
  }

  openProject() {
    window.open(this.props.link);
  }

  render() {
    return (
      <div id="projectone" class="project" onClick={this.openProject}>
        <a class="projectname" onClick={this.openProject}>
          {this.props.name}
        </a>
        
      </div>
    );
  }
}
