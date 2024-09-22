import { Projects } from "./projects";
import jam from "../resources/images/jam.png";
import wellbe from "../resources/images/wellbe.png";
import memory from "../resources/images/memory.png";
import password from "../resources/images/password.png";

export const ProjectsSection = () => {
  return (
    <div
      className={
        "bg-black px-20 py-10 text-white text-pretty whitespace-normal"
      }
    >
      <h1
        id={"projects"}
        className={"text-white text text-3xl py-5 font-medium"}
      >
        Projects
      </h1>
      <div className="grid gap-10 md:grid-cols-2 w-auto">
        <Projects
          name={"WellBe"}
          // link={"https://wellbeing.rusanova.eu/register"}
          desc={
            "The mental health tracker. Fill in how do you feel today and receive advices how to improve your sleep, anxiety or mood in general"
          }
          noButton={true}
          img={wellbe}
        />

        <Projects
          name={"Jammming"}
          link={"https://jamming.rusanova.eu"}
          desc={
            "The website that allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account."
          }
          img={jam}
        />

        <Projects
          name={"Memory game"}
          link={"https://memory.rusanova.eu"}
          desc={
            "Click Start button and cards will be randomly mixed. To win you need to find all pairs with the same city. Good luck!"
          }
          img={memory}
        />
        <Projects
          name={"Password Generator"}
          link={"https://password.rusanova.eu"}
          desc={
            "Choose password length, symbols you want to use and generate your password. Strength scale will show you how strong is your password."
          }
          img={password}
        />
      </div>
    </div>
  );
};
