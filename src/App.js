import logo from './logo.svg';
import './App.css';
import ig from "../src/resources/icons/ig.png";
import lkdn from "../src/resources/icons/lkdn.png";
import fb from "../src/resources/icons/fb.png";
import mail  from "../src/resources/icons/mail.png";
import {Projects} from '../src/Components/projects'
// import {Link} from '../src/Components/link'
// import { HashLink as Link } from "react-router-hash-link";



function App() {
  return (
    <html>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;600&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,600,700"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="./resources/css/styles.css" />
        <meta charset="UTF-8" />
      </head>

      <body>
        <div id="body">
          <div id="header">
          
            <a class="text">About</a> 
            <a class="text">Portfolio</a>
            <a class="text">Contact</a>
            <a id="icon1" class="icon">
              <img class="icon" src={ig} />
            </a>
            <a class="icon">
              <img class="icon" src={lkdn} />
            </a>
          </div>

          <div id="mainsection" class="banner">
            <div class="links">
              <div class="firstword">
                <a class="old">
                  <h1>Hello</h1>
                </a>
              </div>

              <a class="old">
                <h1>I am</h1>
              </a>

              <a class="old">
                <h1>Iuliia</h1>
              </a>
            </div>
          </div>

          <h1 class="text">About</h1>
          <div id="firstsection">
            <div class="about">
              <p>
                Hi! I'm an open-minded and curious designer and illustrator with
                about two years of professional experience. I worked as a
                graphic designer for a small fashion brand O My Bag in
                Amsterdam: I've created designs for marketing campaigns, B2B
                pages and worked on the website design.
              </p>
              <p>
                I'm actively studying different aspects and techniques of
                graphic design, passed several design courses: fashion
                illustration, character design, motion design, Adobe Creative
                Suite (Photoshop, Illustrator, Premiere Pro, AfterEffects), and
                Procreate.
              </p>
            </div>

            <div id="scale" class="scale">
              <div class="wholescale">
                <div class="fillscale">
                  <div class="namescale">
                    <p>Css</p>
                  </div>
                </div>
                <div class="percent">
                  <p>90%</p>
                </div>
              </div>

              <div class="wholescale">
                <div class="fillscale">
                  <div class="namescale">
                    <p>HTML</p>
                  </div>
                </div>
                <div class="percent">
                  <p>90%</p>
                </div>
              </div>

              <div class="wholescale">
                <div class="fillscale">
                  <div class="namescale">
                    <p>Java Script</p>
                  </div>
                </div>
                <div class="percent">
                  <p>90%</p>
                </div>
              </div>

              <div class="wholescale">
                <div class="fillscale">
                  <div class="namescale">
                    <p>Node.js</p>
                  </div>
                </div>
                <div class="percent">
                  <p>90%</p>
                </div>
              </div>

              <div class="wholescale">
                <div class="fillscale">
                  <div class="namescale">
                    <p>React</p>
                  </div>
                </div>
                <div class="percent">
                  <p>90%</p>
                </div>
              </div>
            </div>
          </div>

          <h1 class="text">Projects</h1>
          <div id="secondsection">
            <div id="projecttwo" class="project">
              <Projects
                name={"Jammming"}
                link={"http://juliajammming.surge.sh"}
              />
            </div>

            <div id="projecttwo" class="project">
              <Projects name={"The second project is coming"} isEmpty={true} />
            </div>

            {/* <div id="projectthree" class="project">
   <p class="projectname">Project Three</p>
</div>


<div id = "projectfour" class="project">
 <p class="projectname">Project Four</p>
</div>

<div id="projectfive" class="project">
   <p class="projectname">Project Five</p>
</div>

<div id="projectsix" class="project">
   <p class="projectname">Project Six</p>
</div> */}
          </div>
          <h1 class="text">Contacts</h1>
          {/* <p class="smalltext">
            {" "}
            I want to avoid subjective pissing-matches, and favor open-minded
            collaborators where egos are out of the equation. If that all sounds
            about right, then lets for sure chat about how we can work together.
          </p> */}
          <div id="iconsfooter">
            <a class="footer">
              <img class="icon" src={ig} />
            </a>
            <a class="footer">
              <img class="icon" src={fb} />
            </a>
            <a class="footer">
              <img class="icon" src={mail} />
            </a>
            <a class="footer">
              <img class="icon" src={lkdn} />
            </a>
          </div>
          <p class="footertext">Iuliia Rusanova ©2022</p>
        </div>
      </body>
    </html>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
