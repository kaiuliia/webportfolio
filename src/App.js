import "./App.css";

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
