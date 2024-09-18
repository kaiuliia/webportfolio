import git from "../resources/icons/git.png";
import lkdn from "../resources/icons/lkdn.png";
import { Links } from "./links";
import { Skills } from "./skills";
import html from "../resources/icons/html.png";
import css from "../resources/icons/css.png";
import node from "../resources/icons/node.png";
import js from "../resources/icons/js.png";
import react from "../resources/icons/react.png";
import vs from "../resources/icons/vs.png";

export const FirstSection = () => {
  return (
    <>
      <h1 id="about" className="text">
        About
      </h1>
      <h1 id="mobileHeader" className="text">
        Hello, I'm Yulia!
      </h1>
      <div id="firstsection">
        <div className="about">
          <p>
            I'm Yulia, a software developer with 2 years of experience and a
            background in graphic design. I have an eye for details and a keen
            understanding of how to craft interfaces that are both visually
            appealing and user-friendly.
          </p>
          <p>
            I gained my initial programming experience as a developer making
            significant contributions to a customer-facing portal of a
            sustainable energy delivery company to reach the MVP stage on a
            target date. Currently, I'm enhancing Wellbe, my personal mental
            health app project, to further learn new technologies and improve my
            technical skills.
          </p>
          <p>
            It’s important to me to continuously learn and work on projects that
            make a meaningful impact on people's lives.
          </p>
          <p>
            I hold a residence permit that allows me to work in the Netherlands
            and the EU. Let's connect!
          </p>

          <div id="skills" className="skill">
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
    </>
  );
};
