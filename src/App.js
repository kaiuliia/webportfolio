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
            I'm Yulia - a passionate and enthusiastic frontend developer. I love
            to create beautiful and functional websites that deliver an
            outstanding user experience. With a background in graphic design, I
            have an eye for detail and a keen understanding of how to craft
            interfaces that are both visually appealing and user-friendly. I'm
            fluent in React, JavaScript, HTML, and CSS, and I'm constantly
            striving to improve my skills and learn new technologies. Now, I'm
            ready to take on new challenges and grow even further as a
            developer. I'm open to opportunities as an intern or junior
            engineer, whether permanent or freelance. As a former stewardess, I
            understand the importance of teamwork and communication, and I bring
            those same values to my work as a developer.
          </p>
          <p>
            I have a spouse visa which allows me to work in the Netherlands
            without restrictions. Also, I can work remotely as a self-employed.
          </p>
          <p>
            Let's connect and see how I can help bring your projects to life!
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

        <div id="projectone" className="project">
          <Projects
            name={"Memory Game"}
            link={"https://memory.rusanova.eu"}
            desc={
              "This is a memory game. Click Start Game button and cards will be randomly mixed. To win you need to find all pairs with the same city. Good luck!"
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

        <div id="projectfour" className="project">
          <Projects
            name={"Password Generator"}
            link={"https://password.rusanova.eu"}
            desc={
              "Choose password length, symbols you want to use and generate your password. Strength scale will show you how strong is your password."
            }
          />
        </div>
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
