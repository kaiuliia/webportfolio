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
    window.open(this.props.link);
  }

  render() {
    const linkName = this.state.text;
    return (
      <a
        class="old"
        onMouseEnter={this.changeText}
        onMouseLeave={this.changeBack}
      >
        <h1 id="link">{this.state.text}</h1>
      </a>
    );
  }
}


  // this.state = {greeting : 
  //         'Click the button to receive greetings'} 
        
  //   // Binding this keyword 
  //   this.updateState = this.updateState.bind(this) 
  // } 
    
  // updateState(){ 
  //   // Changing state 
  //   this.setState({greeting : 
  //                'GeeksForGeeks welcomes you !!'}) 
  // } 
      
  // render(){ 
  //   return ( 
  //     <div> 
  //      <h2>Greetings Portal</h2>   
  //      <p>{this.state.greeting}</p>
      
  //       {/* Set click handler */} 
  //       <button onClick={this.updateState}> 
  //         Click me!
  //       </button> 