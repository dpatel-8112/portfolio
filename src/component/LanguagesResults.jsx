import React from "react";
import Languages from "../json/Languages.json";
import SkillsResult from "./SkillsResult";

function LanguagesResults() {
  return (
    <>
      {Languages
        ? Languages.map((item) => (
            <SkillsResult
              key={item.id}
              heading={item.heading}
              link1={item.link1}
              link2={item.link2}
              description={item.description}
            />
          ))
        : ""}
    </>
  );
}

export default LanguagesResults;
