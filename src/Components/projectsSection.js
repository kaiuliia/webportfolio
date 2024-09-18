import git from "../resources/icons/git.png";
import lkdn from "../resources/icons/lkdn.png";
import { Links } from "./links";
import { Projects } from "./projects";

export const ProjectsSection = () => {
  return (
    <>
      <h1 className="text">Projects</h1>
      <div id="secondsection">
        <div id="projectone" className="project">
          <Projects
            name={"Jammming"}
            link={"https://jamming.rusanova.eu"}
            desc={
              "The website that allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account."
            }
          />
        </div>
        <div id="projectzero" classNameName="project">
          <Projects
            name={"WellBe. Coming soon"}
            // link={}
            desc={
              "This is a mental health tracker. Currently I'm working on it."
            }
          />
        </div>
        <div id="projectone" classNameName="project">
          <Projects
            name={"Memory Game"}
            link={"https://memory.rusanova.eu"}
            desc={
              "This is a memory game. Click Start Game button and cards will be randomly mixed. To win you need to find all pairs with the same city. Good luck!"
            }
          />
        </div>

        <div id="projecttwo" className="project">
          <Projects
            name={"Rock-Paper-Scissors"}
            desc={
              "Choose rock, paper or scissors and play against the computer."
            }
            link={"https://rsp.rusanova.eu/"}
          />
        </div>

        <div id="projectfour" classNameName="project">
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
    </>
  );
};
