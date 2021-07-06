import React from "react";
import style from "../style/Dropdown.module.css";
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineMedium,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaDiscord, FaSnapchatGhost } from "react-icons/fa";

function DropdownItem({ name, icon, url }) {
  console.log(icon);
  return (
    <>
      <a href="" className={style.HeaderDropDownItem}>
        <div>
          <span>{icon}</span>
        </div>
      </a>
    </>
  );
}

export default DropdownItem;
