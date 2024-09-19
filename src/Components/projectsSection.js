import { Projects } from "./projects";
import jam from "../resources/images/jam.png";
import wellbe from "../resources/images/wellbe.png";
import bg from "../resources/icons/bg.jpg";

export const ProjectsSection = () => {
  return (
    <div
      className={
        "bg-black px-20 py-10 text-white text-pretty whitespace-normal"
      }
    >
      <h1 className={"text-white text text-3xl py-5 font-medium"}>Projects</h1>
      <div className="grid-cols-1 sm:grid md:grid-cols-2 ">
        <Projects
          name={"Jammming"}
          link={"https://jamming.rusanova.eu"}
          desc={
            "The website that allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account."
          }
          img={jam}
        />
        <Projects
          name={"WellBe"}
          link={""}
          desc={
            "The mental health tracker. Fill in how do you feel today and receive advices how to improve your sleep, anxiety or mood in general"
          }
          noButton={true}
          img={wellbe}
        />
      </div>
    </div>

    // <div className={"bg-black"}>
    //   <h1 className="text-white">Projects</h1>
    //   <div id="secondsection">
    //     <div id="projectone" className="project">
    //       <Projects
    //         name={"Jammming"}
    //         link={"https://jamming.rusanova.eu"}
    //         desc={
    //           "The website that allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account."
    //         }
    //       />
    //     </div>
    //     <div id="projectzero" classNameName="project">
    //       <Projects
    //         name={"WellBe. Coming soon"}
    //         // link={}
    //         desc={
    //           "This is a mental health tracker. Currently I'm working on it."
    //         }
    //       />
    //     </div>
    //     <div id="projectone" classNameName="project">
    //       <Projects
    //         name={"Memory Game"}
    //         link={"https://memory.rusanova.eu"}
    //         desc={
    //           "This is a memory game. Click Start Game button and cards will be randomly mixed. To win you need to find all pairs with the same city. Good luck!"
    //         }
    //       />
    //     </div>
    //
    //     <div id="projecttwo" className="project">
    //       <Projects
    //         name={"Rock-Paper-Scissors"}
    //         desc={
    //           "Choose rock, paper or scissors and play against the computer."
    //         }
    //         link={"https://rsp.rusanova.eu/"}
    //       />
    //     </div>
    //
    //     <div id="projectfour" classNameName="project">
    //       <Projects
    //         name={"Password Generator"}
    //         link={"https://password.rusanova.eu"}
    //         desc={
    //           "Choose password length, symbols you want to use and generate your password. Strength scale will show you how strong is your password."
    //         }
    //       />
    //     </div>
    //   </div>
    //   <br></br>
    // </div>
  );
};
