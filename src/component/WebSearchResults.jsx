import React from "react";
import style from "../style/WebSearchResults.module.css";
import ResumeCard from "./ResumeCard";
import ResumeResults from "./ResumeResults";
import { ActiveTabContext } from "../context/ActiveTabContext";

import SkillsResults from "./SkillsResults";
import ContactForm from "./ContactForm";
import ProjectResuts from "./ProjectResuts";
import LanguagesResults from "./LanguagesResults";

function WebSearchResults() {
  const active = React.useContext(ActiveTabContext);
  return (
    <div className={`${style.WebSearchResults}`}>
      <div className={style.SearchResultTIme}>
        About 10 000 000 000 000 cells (0.34 century)
      </div>
      <div className={`${style.ResultsMainContainer} `}>
        <div className={`row ${style.ResultsRow}`}>
          <div className={`${style.ResultsContainer} col-lg-7 col-12`}>
            {active.activeTab == "Google Resume" ? (
              <ResumeResults />
            ) : active.activeTab == "Contact" ? (
              <ContactForm />
            ) : active.activeTab == "Skills" ? (
              <SkillsResults />
            ) : active.activeTab == "Projects" ? (
              <ProjectResuts />
            ) : active.activeTab == "Languages" ? (
              <LanguagesResults />
            ) : (
              "Page NOT Available"
            )}
          </div>
          <div className={`${style.ResultsContainer} col-lg-5 col-12`}>
            <ResumeCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebSearchResults;
