import logo from "./logo.svg";
import "./App.css";
import git from "../src/resources/icons/git.png";
import lkdn from "../src/resources/icons/lkdn.png";
import fb from "../src/resources/icons/fb.png";
import mail from "../src/resources/icons/mail.png";
import { Projects } from "../src/Components/projects";
import { Skills } from "../src/Components/skills";
import { Links } from "../src/Components/links";
import html from "../src/resources/icons/html.png";
import css from "../src/resources/icons/css.png";
import vs from "../src/resources/icons/vs.png";
import node from "../src/resources/icons/node.png";
import react from "../src/resources/icons/react.png";
import js from "../src/resources/icons/js.png";
import { Header } from "./Components/header";
import { MainSection } from "./Components/mainSection";
import { FirstSection } from "./Components/firstSection";
import { ProjectsSection } from "./Components/projectsSection";
import { Contacts } from "./Components/contacts";

function App() {
  return (
    <div>
      <Header />
      <MainSection />
      <FirstSection />
      <ProjectsSection />
      <Contacts />
    </div>
  );
}

export default App;

// todo highlith the main phrases, change cards, chage backround, add ts, zustand, redux etc, remove vs code etc / upd the year/ add gradient to desktop and change a bit desktop design
