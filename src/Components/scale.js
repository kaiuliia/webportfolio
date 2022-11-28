import React from "react";
import "./scale.css";

export class Scale extends React.Component {
  constructor(props) {
    super(props);
   
  


  }



  render() {
     const fill = this.props.percent;
    return (
      <div class="wholescale">
        <div class="fillscale" style={{'width':fill}}>
          <div class="namescale">
            <p>{this.props.name}</p>
          </div>
        </div>
        <div class="percent">
          <p>{fill}</p>
        </div>
      </div>
    );
  }
}
