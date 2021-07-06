import React from "react";
import style from "../style/Dropdown.module.css";
import { BiUpArrow } from "react-icons/bi";
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineMedium,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaDiscord, FaSnapchatGhost } from "react-icons/fa";

function Dropdown() {
  return (
    <>
      <div className className={style.HeaderDropDownContainer}>
        <span className={style.TooltipArrow}>
          <BiUpArrow />
        </span>

        <div className={style.HeaderDropDown}>
          <a
            target="_blank"
            href="https://instagram.com/dpatel_8112/"
            className={style.HeaderDropDownItem}
          >
            <div>
              <AiOutlineInstagram />
            </div>
          </a>
          <a
            target="_blank"
            href="https://github.com/dpatel-8112/"
            className={style.HeaderDropDownItem}
          >
            <div>
              <AiFillGithub />
            </div>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/devarshi-dot-patel"
            className={style.HeaderDropDownItem}
          >
            <div>
              <AiOutlineLinkedin />
            </div>
          </a>
        </div>
        <div className={style.HeaderDropDown}>
          <a
            target="_blank"
            href="https://amazingdotdp.medium.com/"
            className={style.HeaderDropDownItem}
          >
            <div>
              <AiOutlineMedium />
            </div>
          </a>
          <a
            target="_blank"
            href="mailto:official.devarshi@pm.me"
            className={style.HeaderDropDownItem}
          >
            <div>
              <AiOutlineMail />
            </div>
          </a>
          <a
            target="_blank"
            href="https://twitter.com/dpatel_08"
            className={style.HeaderDropDownItem}
          >
            <div>
              <AiOutlineTwitter />
            </div>
          </a>
        </div>
        <div className={style.HeaderDropDown}>
          <a
            target="_blank"
            href=""
            className={style.HeaderDropDownItem}
            style={{ textDecoration: "none" }}
          >
            <div>
              <FaDiscord />
            </div>
            <div style={{ fontSize: "14px" }}>Devarshi#7130</div>
          </a>
          <a
            target="_blank"
            href="dpatel8112"
            className={style.HeaderDropDownItem}
          >
            <div>
              <FaSnapchatGhost />
            </div>
          </a>
          <a target="_blank" href="" className={style.HeaderDropDownItem}>
            <div></div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
