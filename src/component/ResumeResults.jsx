import React from "react";
import ResumeResult from "./ResumeResult";
import Resume from "../json/Resume.json";

function ResumeResults() {
  return (
    <>
      {Resume
        ? Resume.map((item) => (
            <ResumeResult
              key={item.id}
              heading={item.heading}
              link={item.link}
              description={item.description}
            />
          ))
        : ""}
    </>
  );
}

export default ResumeResults;
