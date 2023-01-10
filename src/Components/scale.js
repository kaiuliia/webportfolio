import React from "react";
import "./scale.css";

export function Scale (props) {

 
    const fill = props.percent;
    return (
      <div class="wholescale">
        <div class="fillscale" style={{ width: fill }}>
          <div class="namescale">
            <p>{props.name}</p>
          </div>
        </div>
        <div class="percent">
          <p>{fill}</p>
        </div>
      </div>
    );
  }

