import React from "react";
import Projects from "../json/Projects.json";
import SkillsResult from "./SkillsResult";

function ProjectResuts() {
  return (
    <>
      {Projects
        ? Projects.map((item) => (
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

export default ProjectResuts;
