import git from "../resources/icons/git.png";
import lkdn from "../resources/icons/lkdn.png";
import { Links } from "./links";
import { Skills } from "./skills";
import html from "../resources/icons/html.png";
import css from "../resources/icons/css.png";
import node from "../resources/icons/node.png";
import js from "../resources/icons/js.png";
import ts from "../resources/icons/ts.png";
import react from "../resources/icons/react.png";
import vs from "../resources/icons/vs.png";

export const FirstSection = () => {
  return (
    <div className={"bg-black px-20 text-white text-pretty whitespace-normal"}>
      <h1 className={"text-white text text-3xl py-5 font-medium"}>About</h1>
      <div id="about">
        <div className="about">
          <p>
            I'm Yulia, a software developer with{" "}
            <span>
              2 years of experience and a background in graphic design.
            </span>{" "}
            I have an eye for details and a keen understanding of how to craft
            interfaces that are both visually appealing and user-friendly.
          </p>
          <br />
          <p>
            I gained my initial programming experience as a developer making
            significant contributions to a customer-facing portal of a
            sustainable energy delivery company to reach the MVP stage on a
            target date. Currently, I'm enhancing Wellbe,
            <span> my personal mental health app project,</span> to further
            learn new technologies and improve my technical skills.
          </p>
          <br />
          <p>
            It’s important to me to <span>continuously learn</span> and work on
            projects that make a meaningful impact on people's lives.
          </p>
          <p>
            I hold a residence permit that allows me to work in the Netherlands
            and the EU. Let's connect!
          </p>
          <br />
          <div
            className={
              "lg:flex lg:flex-row lg:justify-between pt-5 lg:px-20 grid grid-cols-3 gap-[4rem]"
            }
          >
            <Skills name={"React"} icon={react} />
            <Skills name={"TypeScript"} icon={ts} />
            <Skills name={"JavaScript"} icon={js} />
            <Skills name={"HTML"} icon={html} />
            <Skills name={"CSS"} icon={css} />
            <Skills name={"Node.js"} icon={node} />
          </div>
          <br></br>
        </div>
      </div>
    </div>
  );
};
