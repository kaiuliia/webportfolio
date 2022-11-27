import React from "react";
import "./link.css";

export class Link extends React.Component {
  constructor(props) {
    super(props);
    this.openProject=this.openProject.bind(this);
  }

 
  
openProject() {
    window.open(this.props.link);
  };



  render() {
    return (
      <a onClick={this.openProject}>{this.props.name}</a>
    );
  }
}
