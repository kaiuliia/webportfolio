import git from "../resources/icons/git.png";
import lkdn from "../resources/icons/lkdn.png";
import bg from "../resources/icons/bg.jpg";
// import bg from "../resources/icons/bg.jpg";
import { Links } from "./links";

export const MainSection = () => {
  console.log(bg);
  return (
    <div
      className="mainsection h-[50rem] bg-cover bg-[right_1rem]  bg-no-repeat w-full z-100"
      style={{
        backgroundImage: `url(${bg})`, // Correct usage of backgroundImage with imported file
      }}
    >
      <div className="links">
        <div className="firstword">
          <Links name={"Hello"} alt={"About"} link={"/#about"} />
        </div>

        <Links name={"I am"} alt={"Projects"} link={"/#about"} />

        <Links name={"Yulia"} alt={"Contacts"} link={"/#iconsfooter"} />
      </div>
    </div>
  );
};
