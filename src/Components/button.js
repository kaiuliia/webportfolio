import React from "react";
import "./button.css";

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.openProject=this.openProject.bind(this);
  }

 
  
openProject() {
    window.open(this.props.link);
  };


  render() {
    return (
      <button onClick={this.openProject}>{this.props.btName}</button>
    );
  }
}
