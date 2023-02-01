import logo from "./logo.svg";
import "./App.css";
import git from "../src/resources/icons/git.png";
import lkdn from "../src/resources/icons/lkdn.png";
import fb from "../src/resources/icons/fb.png";
import mail from "../src/resources/icons/mail.png";
import { Projects } from "../src/Components/projects";
import { Skills } from "../src/Components/skills";
import { Links } from "../src/Components/links";
import html from "../src/resources/icons/html.png";
import css from "../src/resources/icons/css.png";
import vs from "../src/resources/icons/vs.png";
import node from "../src/resources/icons/node.png";
import react from "../src/resources/icons/react.png";
import js from "../src/resources/icons/js.png";

function App() {
  return (
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
        <a id="icon1" class="icon" href="https://github.com/kaiuliia/">
          <img class="icon" src={git} />
        </a>
        <a
          class="icon"
          href="https://www.linkedin.com/in/yulia-rusanova-627280189/"
        >
          <img class="icon" src={lkdn} />
        </a>
      </div>

      <div id="mainsection" class="banner">
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
            Hey, I'm Yulia! I've been learning frontend engineering for the last
            year and spending almost all my spare time solving different
            problems. I've created small projects and React components and
            always try to think outside the of box. Fluent in React, JavaScript,
            HTML, and CSS. I have a graphic designer background, which helps me
            understand how responsive design works. And I'm a former flight
            attendant, and it was the best opportunity to improve my soft
            skills.
          </p>
          <p>
            Open to permanent and freelance opportunities as an intern/junior
            engineer to learn new technologies and strengthen skills.
          </p>

          <div id="skills" class="skill">
            <Skills name={"HTML"} icon={html} />
            <Skills name={"CSS"} icon={css} />
            <Skills name={"Node.js"} icon={node} />
            <Skills name={"Java Script"} icon={js} />
            <Skills name={"React"} icon={react} />
            <Skills name={"Visual Studio"} icon={vs} />
          </div>
          <br></br>
        </div>
      </div>

      <h1 class="text">Projects</h1>
      <div id="secondsection">
        
        <div id="projectone" class="project">
          <Projects
            name={"Jammming"}
            link={"https://jamming.rusanova.eu"}
            desc={
              "The website that allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account."
            }
          />
        </div>

        <div id="projecttwo" class="project">
          <Projects
            name={"Rock-Paper-Scissors"}
            desc={
              "Choose rock, paper or scissors and play against the computer."
            }
            link={"https://rsp.rusanova.eu/"}
          />
        </div>

        <div id="projectthree" class="project">
          <Projects
            name={"Adopt a pet"}
            link={"https://pet.rusanova.eu/"}
            desc={
              "Adopt a Pet is an app, created using react-router. You can choose a pet, easily switch between pages and search a pet by name."
            }
          />
        </div>

        {/* <div id="projectfour" class="project">
          <Projects
            name={"Next project is coming"}
            isEmpty={true}
            desc={""}
          />
        </div> */}
      </div>
      <br></br>
      <h1 class="text">Contacts</h1>

      <div id="iconsfooter">
        <a class="footer" href="https://github.com/kaiuliia/">
          <img class="icon" src={git} />
        </a>
        <a class="footer" href="https://www.facebook.com/karjuale">
          <img class="icon" src={fb} />
        </a>
        <a class="footer" href="mailto:karjuale@gmail.com">
          <img class="icon" src={mail} />
        </a>
        <a
          class="footer"
          href="https://www.linkedin.com/in/yulia-rusanova-627280189/"
        >
          <img class="icon" src={lkdn} />
        </a>
      </div>
      <p class="footertext">Iuliia Rusanova ©2022</p>
    </div>
  );
}

export default App;
