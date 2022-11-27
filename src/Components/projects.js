import React from "react";
import "./projects.css";
import {Button} from './button'

export class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="projectone" class="project">
        <p class="projectname">{this.props.name}</p>
        <Button
          btName={"View Project"}
          link={'http://twitter.com/saigowthamr'}
        />
      </div>
    );
  }
}
