import git from "../resources/icons/git.png";
import lkdn from "../resources/icons/lkdn.png";
import { Links } from "./links";
import { Projects } from "./projects";
import { Skills } from "./skills";
import react from "../resources/icons/react.png";
import ts from "../resources/icons/ts.png";
import js from "../resources/icons/js.png";
import html from "../resources/icons/html.png";
import css from "../resources/icons/css.png";
import node from "../resources/icons/node.png";

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
        />

        <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
              alt="Hollywood Sign on The Hill"
            />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight">
              Card title
            </h5>
            <p className="mb-4 text-base">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>

        <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://tecdn.b-cdn.net/img/new/standard/city/042.webp"
              alt="Palm Springs Road"
            />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight">
              Card title
            </h5>
            <p className="mb-4 text-base">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>

        <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://tecdn.b-cdn.net/img/new/standard/city/044.webp"
              alt="Skyscrapers"
            />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight">
              Card title
            </h5>
            <p className="mb-4 text-base">
              This is a longer card with supporting text below as a natural
              lead-in to additional content.
            </p>
          </div>
        </div>

        <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
              alt="Los Angeles Skyscrapers"
            />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight">
              Card title
            </h5>
            <p className="mb-4 text-base">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
      {/*<div id="projects">*/}
      {/*  <Projects*/}
      {/*    name={"Jammming"}*/}
      {/*    link={"https://jamming.rusanova.eu"}*/}
      {/*    desc={*/}
      {/*      "The website that allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account."*/}
      {/*    }*/}
      {/*  />*/}
      {/*</div>*/}
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
