import Header from "./components/Header";
import MainContainer from "./components/Main/MainContainer";
import ProjectsContainer from "./components/Projects/ProjectsContainer";
import SkillsContainer from "./components/Skills/SkillsContainer";
import ContactMeForm from "./components/ContactForm/ContactMeForm";
import Footer from "./components/Footer";
import AboutMe from "./components/About/AboutMe";
import React from "react";

function App() {
  return (
<>
     <Header />
     <MainContainer />
     <ProjectsContainer />
     <AboutMe />
     <SkillsContainer />
    <ContactMeForm />
     <Footer />
</>
  );
}

export default App;
