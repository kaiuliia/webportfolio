import git from "../resources/icons/git.png";
import lkdn from "../resources/icons/lkdn.png";
import bg from "../resources/icons/bg.jpg";
// import bg from "../resources/icons/bg.jpg";
import { Links } from "./links";

export const MainSection = () => {
  return (
    <div
      className="mainsection  relative h-[50rem] bg-cover bg-[right_1rem_top-1rem]  bg-no-repeat w-full z-100"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 15%),linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 15%), url(${bg})`,
      }}
    >
      <div className="linksDesktop flex flex-col pl-20 pt-20 text-white text-[8rem] font-bold">
        <Links name={"Hello"} alt={"About"} link={"about"} />
        <Links name={"I am"} alt={"Projects"} link={"projects"} />
        <Links name={"Yulia"} alt={"Contacts"} link={"footer"} />
      </div>
    </div>
  );
};
