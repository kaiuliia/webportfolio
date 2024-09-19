import git from "../resources/icons/git.png";
import lkdn from "../resources/icons/lkdn.png";
import mail from "../resources/icons/mail.png";

export const Contacts = () => {
  return (
    <div
      className={
        "bg-black px-20 py-10 text-white text-pretty  whitespace-normal"
      }
    >
      <h1 id={"footer"} className={"text-white text text-3xl py-5 font-medium"}>
        Contacts
      </h1>

      <div className={"flex flex-row gap-10"}>
        <a className="footer" href="https://github.com/kaiuliia/">
          <img className="icon w-8 h-8" src={git} />
        </a>
        <a className="footer" href="mailto:yulia.rusanov@gmail.com">
          <img className="icon w-8 h-8" src={mail} />
        </a>
        <a
          className="footer"
          href="https://www.linkedin.com/in/yuliyarusanova/"
        >
          <img className="icon w-8 h-8" src={lkdn} />
        </a>
      </div>
      <div className={"flex justify-center"}>
        <p className="footertext  pt-10 text-xs">Yuiia Rusanova ©2024</p>
      </div>
    </div>
  );
};
