import React from "react";
import Skills from "../json/Skills.json";
import SkillsResult from "./SkillsResult";

function SkillsResults() {
  return (
    <>
      {Skills
        ? Skills.map((item) => (
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

export default SkillsResults;
