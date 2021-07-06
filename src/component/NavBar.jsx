import React from "react";
import style from "../style/NavBar.module.css";

import { ActiveTabContext } from "../context/ActiveTabContext";

function NavBar() {
  const active = React.useContext(ActiveTabContext);
  return (
    <div className={style.NavBar}>
      <div className={style.NavBarWrap}>
        <div className={style.NavBarContainer}>
          <div
            onClick={() => {
              active.activeTabHandler("Google Resume");
            }}
            className={`${style.NavBarItem} ${
              active.activeTab == `Google Resume` ? style.active : ``
            }`}
          >
            Google Resume
          </div>

          <div
            onClick={() => {
              active.activeTabHandler("Contact");
            }}
            className={`${style.NavBarItem} ${
              active.activeTab == `Contact` ? style.active : ``
            }`}
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
