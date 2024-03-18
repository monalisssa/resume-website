import React from 'react';
import Header from "../components/Header";
import MainContainer from "../components/Main/MainContainer";
import ProjectsContainer from "../components/Projects/ProjectsContainer";
import AboutMe from "../components/About/AboutMe";
import SkillsContainer from "../components/Skills/SkillsContainer";
import ContactMeForm from "../components/ContactForm/ContactMeForm";
import Footer from "../components/Footer";

const MainPage = () => {
    return (
        <div className="w-100">
            <Header />
            <MainContainer />
            <ProjectsContainer />
            <AboutMe />
            <SkillsContainer />
            <ContactMeForm />
            <Footer />
        </div>
    );
};

export default MainPage;