import React from "react";
import "./links.css";

export class Links extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: this.props.name };
    this.openLink = this.openLink.bind(this);
    this.changeText = this.changeText.bind(this);
    this.changeBack = this.changeBack.bind(this);
  }

  changeText() {
    this.setState({ text: this.props.alt });
  }

  changeBack() {
    this.setState({ text: this.props.name });
  }

  openLink() {
    window.location.replace(this.props.link);
  }

  render() {
    const linkName = this.state.text;
    return (
      <a
        id="old"
        onMouseEnter={this.changeText}
        onMouseLeave={this.changeBack}
        onClick={this.openLink}
      >
        <h1 id="link">{this.state.text} </h1>
      </a>
    );
  }
}
