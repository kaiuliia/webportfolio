import git from "../resources/icons/git.png";
import lkdn from "../resources/icons/lkdn.png";
import { Links } from "./links";
import { Projects } from "./projects";
import mail from "../resources/icons/mail.png";

export const Contacts = () => {
  return (
    <>
      <h1 className="text">Contacts</h1>
      <div id="iconsfooter">
        <a className="footer" href="https://github.com/kaiuliia/">
          <img className="icon" src={git} />
        </a>
        <a className="footer" href="mailto:yulia.rusanov@gmail.com">
          <img className="icon" src={mail} />
        </a>
        <a
          className="footer"
          href="https://www.linkedin.com/in/yuliyarusanova/"
        >
          <img className="icon" src={lkdn} />
        </a>
      </div>
      <p className="footertext">Yuiia Rusanova ©2024</p>
    </>
  );
};
