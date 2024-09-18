import git from "../resources/icons/git.png";
import lkdn from "../resources/icons/lkdn.png";

export const Header = () => {
  return (
    <div
      className={
        "text-white w-full flex flex-row h-[2rem] bg-black items-center p-10 justify-end gap-5"
      }
    >
      <div
        className={"cursor-pointer"}
        onClick={() => window.location.replace("/#about")}
      >
        About
      </div>
      <div
        className={"cursor-pointer"}
        onClick={() => window.location.replace("/#about")}
      >
        Portfolio
      </div>
      <a className={"text-white"} href="mailto:yulia.rusanov@gmail.com">
        Contact
      </a>
      <a className={"cursor-pointer"} href="https://github.com/kaiuliia/">
        <img className="w-8 h-8" src={git} alt={""} />
      </a>
      <a
        className={"cursor-pointer"}
        href="https://www.linkedin.com/in/yuliyarusanova/"
      >
        <img className="w-8 h-8" src={lkdn} alt={""} />
      </a>
    </div>
  );
};

// #header {
//     display: flex;
//     height: 85px;
//
//     background-color: rgb(0, 0, 0);
//     width: 100%;
//
//     color: white;
//
//     align-items: center;
//     justify-content: right;
// }
