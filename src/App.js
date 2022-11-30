import logo from './logo.svg';
import './App.css';
import ig from "../src/resources/icons/ig.png";
import lkdn from "../src/resources/icons/lkdn.png";
import fb from "../src/resources/icons/fb.png";
import mail  from "../src/resources/icons/mail.png";
import {Projects} from '../src/Components/projects'
import { Scale } from "../src/Components/scale";
import { Links } from "../src/Components/links";
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
            <a class="text" href="mailto:karjuale@gmail.com">
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
            <div class="mobileHeader">
              <h1>Hello! I am Yulia.</h1>
            </div>

            <div class="links">
              <div class="firstword">
                <Links name={"Hello"} alt={"About"} link={"/#about"} />
              </div>

              <Links name={"I am"} alt={"Projects"} link={"/#about"} />

              <Links name={"Yulia"} alt={"Contacts"} link={"/#iconsfooter"} />
            </div>
          </div>

          <h1 id="about" class="text">
            About
          </h1>
          <h1 id="mobileHeader" class="text">
            Hello, I'm Yulia!
          </h1>
          <div id="firstsection">
            <div class="about">
              <p>
                I’m very interested in programming and love to solve different
                types of problems. I learn very fast and always trying to think
                outside of the box. Fluent in React, JavaScript, HTML and CSS.
                I have a Graphic designer background and it helps to communicate
                with a team.
              </p>
              <p>
               Open to permanent and freelance opportunities as an
                intern/junior engineer to learn new technologies and strengthen
                skills.
              </p>
            </div>
            <div id="scale" class="scale">
              <Scale name={"HTML"} percent={"85%"} />
              <Scale name={"CSS"} percent={"85%"} />
              <Scale name={"Java Script"} percent={"65%"} />
              <Scale name={"Node.js"} percent={"20%"} />
              <Scale name={"React"} percent={"65%"} />
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
