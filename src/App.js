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
            <a class="text" onClick={() => window.location.replace("/#about")}>
              About
            </a>

            <a class="text" onClick={() => window.location.replace("/#about")}>
              Portfolio
            </a>
            <a
              class="text"
              onClick={() => window.location.replace("/#iconsfooter")}
            >
              Contact
            </a>
            <a id="icon1" class="icon">
              <img
                class="icon"
                src={ig}
                onClick={() =>
                  window.open(
                    "https://instagram.com/yuliya.rusanova?igshid=YmMyMTA2M2Y="
                  )
                }
              />
            </a>
            <a class="icon">
              <img
                class="icon"
                src={lkdn}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/yulia-rusanova-627280189/"
                  )
                }
              />
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

          <h1 id="about" class="text">
            About
          </h1>
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
          </div>
          <h1 class="text">Contacts</h1>

          <div id="iconsfooter">
            <a class="footer">
              <img
                class="icon"
                src={ig}
                onClick={() =>
                  window.open(
                    "https://instagram.com/yuliya.rusanova?igshid=YmMyMTA2M2Y="
                  )
                }
              />
            </a>
            <a class="footer">
              <img
                class="icon"
                src={fb}
                onClick={() => window.open("https://www.facebook.com/karjuale")}
              />
            </a>
            <a class="footer" href="mailto:karjuale@gmail.com">
              <img class="icon" src={mail} />
            </a>
            <a class="footer">
              <img
                class="icon"
                src={lkdn}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/yulia-rusanova-627280189/"
                  )
                }
              />
            </a>
          </div>
          <p class="footertext">Iuliia Rusanova ©2022</p>
        </div>
      </body>
    </html>
  );
}

export default App;
