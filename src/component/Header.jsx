import React from "react";
import { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import style from "../style/Header.module.css";
import Dropdown from "./Dropdown";
import { ActiveTabContext } from "../context/ActiveTabContext";
import Button from "react-bootstrap/Button";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const active = React.useContext(ActiveTabContext);

  const dropDownHandler = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className={style.HeaderItemsContainer}>
        <div className={style.HeaderItems}>
          <div
            onClick={() => active.activeTabHandler("Google Resume")}
            className={`${style.HeaderItem} ${style.HeaderItemResume}`}
          >
            <span>Google Resume</span>
          </div>

          <div className={`${style.HeaderItem} ${style.HeaderItemMenu}`}>
            <span>
              <CgMenuGridO onClick={dropDownHandler} />
            </span>
            {isDropdownOpen ? <Dropdown /> : ""}
          </div>
          <div className={`${style.HeaderItem} ${style.HeaderItemContact}`}>
            <Button
              onClick={() => active.activeTabHandler("Contact")}
              variant="primary"
              type="submit"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
