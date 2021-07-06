import React from "react";
import style from "../style/WebSearchResults.module.css";

function WebSearchResult() {
  return (
    <>
      <div className={`${style.ResultContainer} col-12`}>
        <div className={style.ResultHeading}>My Skills</div>
        <div className={style.ResultLink}>http://amazingdotdp.me/skills</div>
        <div className={style.ResultDescription}>
          <p>
            Web Project management, SEO, user experience, ergonomy, content
            marketing, Web Analytics, Website architecture and creation, Drupal
            7, Web design and Ms Office...
          </p>
        </div>
      </div>
    </>
  );
}

export default WebSearchResult;
