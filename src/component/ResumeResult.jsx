import React from "react";
import style from "../style/WebSearchResults.module.css";
import { ActiveTabContext } from "../context/ActiveTabContext";

function ResumeResult({ heading, link, description }) {
  const active = React.useContext(ActiveTabContext);
  return (
    <>
      <div
        onClick={() => {
          active.activeTabHandler(link);
        }}
        className={`${style.ResultContainer} col-12`}
      >
        <div className={style.ResultHeading}>{heading}</div>
        <div className={style.ResultLink}>
          <a href="http://amazingdotdp.me/">www.amazingdotdp.me</a> {`>`}
          <a
            onClick={() => {
              active.activeTabHandler(link);
            }}
          >
            {link}
          </a>
        </div>
        <div className={style.ResultDescription}>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}

export default ResumeResult;
