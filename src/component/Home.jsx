import React, { useState, useEffect } from "react";
import Contact from "./Contact";
import GoogleResume from "./GoogleResume";
import HomeContainer from "./HomeContainer";
import { ActiveTabProvider } from "../context/ActiveTabContext";
import ResumeSkills from "./ResumeSkills";

function Home() {
  const nomenclature = {
    "Google Resume": "GoogleResume",
    Contact: "Contact",
    Skills: "Skills",
  };

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
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

  const activeTabHandler = (newState) => {
    setActiveTab(newState);
  };

  useEffect(() => {
    resumeOpenHandler(activeTab == "Google Resume" ? true : false);
    contactOpenHandler(activeTab == "Contact" ? true : false);
    skillsOpenHandler(activeTab == "Skills" ? true : false);
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
        ) : (
          <HomeContainer />
        )}
      </ActiveTabProvider>
    </>
  );
}

export default Home;
