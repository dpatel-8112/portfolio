import React from "react";
import style from "../style/Footer.module.css";
import { ActiveTabContext } from "../context/ActiveTabContext";

function Footer() {
  const active = React.useContext(ActiveTabContext);
  return (
    <div className={style.Footer}>
      <div className={style.FooterContainer}>
        <div className={style.FooterLeft}>
          <div onClick={() => active.activeTabHandler("Contact")}>contact</div>
          <div>Legal Notice</div>
          <div
            onClick={() => (window.location.href = "http://amazingdotdp.me")}
          >
            @2021 amazingdotdp
          </div>
        </div>
        <div className={style.FooterRight}>
          <div>
            <a href="http://maps.google.com/?q=India">INDIA</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
