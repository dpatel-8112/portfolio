import React, { useState } from "react";
import style from "../style/SearchHeader.module.css";
import img1 from "../img/img1.png";
import { AiOutlineSearch } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import style1 from "../style/Header.module.css";
import Dropdown from "./Dropdown";
import { ActiveTabContext } from "../context/ActiveTabContext";
import Button from "react-bootstrap/Button";

function SearchHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropDownHandler = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const active = React.useContext(ActiveTabContext);
  // console.log(active);

  return (
    <div className={style.SearchHeader}>
      <div className={style.SearchHeaderLeft}>
        <div className={style.SearchHeaderLeftImage}>
          <img
            src={img1}
            alt=""
            onClick={() => {
              active.activeTabHandler("Home");
            }}
          />
        </div>
        <div className={style.SearchHeaderLeftSearchBar}>
          <div className={style.SearchHeaderLeftSearchBarInput}>
            <input type="text" value={active.activeTab} />
          </div>
          <div className={style.SearchHeaderLeftSearchBarButton}>
            <button>
              <AiOutlineSearch />
            </button>
          </div>
        </div>
      </div>
      <div className={style.SearchHeaderRight}>
        <div className={`${style1.HeaderItem} ${style1.HeaderItemMenu}`}>
          <span>
            <CgMenuGridO onClick={dropDownHandler} />
          </span>
          {isDropdownOpen ? <Dropdown /> : ""}
        </div>
        <div className={`${style1.HeaderItem} ${style1.HeaderItemContact}`}>
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
  );
}

export default SearchHeader;
