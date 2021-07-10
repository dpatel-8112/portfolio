import React, { useState, useEffect } from "react";
import Contact from "./Contact";
import GoogleResume from "./GoogleResume";
import HomeContainer from "./HomeContainer";
import { ActiveTabProvider } from "../context/ActiveTabContext";
import ResumeSkills from "./ResumeSkills";
import ResumeProjects from "./ResumeProjects";
import ResumeLanguages from "./ResumeLanguages";

function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isLanguagesOpen, setIsLanguagesOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const resumeOpenHandler = (newState) => {
    setIsResumeOpen(newState);
  };

  const contactOpenHandler = (newState) => {
    setIsContactOpen(newState);
  };

  const skillsOpenHandler = (newState) => {
    setIsSkillsOpen(newState);
  };

  const projectsOpenHandler = (newState) => {
    setIsProjectsOpen(newState);
  };
  const languagesOpenHandler = (newState) => {
    setIsLanguagesOpen(newState);
  };

  const activeTabHandler = (newState) => {
    setActiveTab(newState);
  };

  useEffect(() => {
    resumeOpenHandler(activeTab == "Google Resume" ? true : false);
    contactOpenHandler(activeTab == "Contact" ? true : false);
    skillsOpenHandler(activeTab == "Skills" ? true : false);
    projectsOpenHandler(activeTab == "Projects" ? true : false);
    languagesOpenHandler(activeTab == "Languages" ? true : false);
    console.log(activeTab);
    return () => {};
  }, [activeTab]);

  return (
    <>
      <ActiveTabProvider
        value={{
          activeTab,
          activeTabHandler,
        }}
      >
        {isResumeOpen ? (
          <GoogleResume />
        ) : isContactOpen ? (
          <Contact />
        ) : isSkillsOpen ? (
          <ResumeSkills />
        ) : isProjectsOpen ? (
          <ResumeProjects />
        ) : isLanguagesOpen ? (
          <ResumeLanguages />
        ) : (
          <HomeContainer />
        )}
      </ActiveTabProvider>
    </>
  );
}

export default Home;
