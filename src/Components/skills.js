import React from "react";
import "./skills.css";
import html from "../resources/icons/html.png";
import css from "../resources/icons/css.png";
import vs from "../resources/icons/vs.png";
import git from "../resources/icons/git.png";
import node from "../resources/icons/node.png";
import react from "../resources/icons/react.png";
import js from "../resources/icons/js.png";

export class Skills extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div id ='skills'>
<img class='icon' src={this.props.icon}/>
<h3>{this.props.name}</h3>
      </div>

    
//       <div id="skills">
//         <div class="skillname">
//           <p>HTML</p>
//           <img class="icon" src={html} />
//         </div>

//         <div class="skillname">
//           <p>CSS</p>
//           <img class="icon" src={css} />
//            </div>

//             <div class="skillname">
//           <p>Java Script</p>
//           <img class="icon" src={js} />
//            </div>
//  <div class="skillname">
//           <p>Node.js</p>
//           <img class="icon" src={node} />
//            </div>
//  <div class="skillname">
//           <p>React</p>
//           <img class="icon" src={react} />
//            </div>
//  <div class="skillname">
//           <p>GitHub</p>
//           <img class="icon" src={git} />
//  </div>
//          <div class="skillname">
//           <p>Visual Studio</p>
//           <img class="icon" src={vs} />
          

//         </div>
//       </div>
    );
  }
}
