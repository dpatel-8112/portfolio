import React from "react";
import style from "../style/WebSearchResults.module.css";
import { ActiveTabContext } from "../context/ActiveTabContext";

function SkillsResult({ heading, link1, link2, description }) {
  const active = React.useContext(ActiveTabContext);
  return (
    <>
      <a
        style={{ textDecoration: "none", color: "unset" }}
        href={`${link1}/${link2}`}
        target="_blank"
      >
        <div className={`${style.ResultContainer} col-12`}>
          <div className={style.ResultHeading}>{heading}</div>
          <div className={style.ResultLink}>
            <a target="_blank" href={link1}>
              {link1}
            </a>{" "}
            {` > `}
            <a target="_blank" href={`${link1}/${link2}`}>
              {link2}
            </a>
          </div>
          <div className={style.ResultDescription}>
            <p>{description}</p>
          </div>
        </div>
      </a>
    </>
  );
}

export default SkillsResult;
