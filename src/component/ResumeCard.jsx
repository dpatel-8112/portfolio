import React from "react";
import Card from "react-bootstrap/Card";
import style from "../style/WebSearchResults.module.css";
import img4 from "../img/img4.jpg";
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineMedium,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaDiscord, FaSnapchatGhost } from "react-icons/fa";

function ResumeCard() {
  return (
    <>
      <Card style={{ boxShadow: "1px 1px 5px black" }}>
        <Card.Img variant="top" src={img4} />
        <Card.Body>
          <Card.Title className={style.CardHeading}>
            <span>Devarshi Patel</span>
          </Card.Title>
          <Card.Text className={style.CardDesignation}>
            <span>Student at Chandigarh University.</span>
          </Card.Text>
          <span>
            <hr />
          </span>
          <div className={style.CardInfoWrap}>
            <div className={style.CardInfo}>
              <span className={style.CardInfoKey}>Born : </span>
              <span className={style.CardInfoValue}>
                08 November 2000 (21 years)
              </span>
            </div>
            <div className={style.CardInfo}>
              <span className={style.CardInfoKey}>Nationality : </span>
              <span className={style.CardInfoValue}>Indian</span>
            </div>
            <div className={style.CardInfo}>
              <span className={style.CardInfoKey}>Occupation : </span>
              <span className={style.CardInfoValue}>Freelance</span>
            </div>
            <div className={style.CardInfo}>
              <span className={style.CardInfoKey}>Education : </span>
              <span className={style.CardInfoValue}>
                <a
                  target="_blank"
                  href="http://maps.google.com/?q=Chandigarh University"
                >
                  Chandigarh University, Punjab
                </a>
              </span>
            </div>
            <hr />
            <div className={style.CardInfo}>
              <div style={{ fontWeight: "500" }}>Profiles</div>
              <div style={{ display: "flex" }}>
                <a
                  target="_blank"
                  style={{ textDecoration: "none" }}
                  href="https://github.com/dpatel-8112/"
                >
                  <div style={{ padding: "10px" }}>
                    <div style={{ fontSize: "30px", textAlign: "center" }}>
                      <AiFillGithub />
                    </div>
                    <div>GitHub</div>
                  </div>
                </a>
                <a
                  target="_blank"
                  style={{ textDecoration: "none" }}
                  href="https://www.instagram.com/dpatel_8112/"
                >
                  <div style={{ padding: "10px" }}>
                    <div style={{ fontSize: "30px", textAlign: "center" }}>
                      <AiOutlineInstagram />
                    </div>
                    <div>Instagram</div>
                  </div>
                </a>
                <a
                  target="_blank"
                  style={{ textDecoration: "none" }}
                  href="https://www.linkedin.com/in/devarshi-dot-patel/"
                >
                  <div style={{ padding: "10px" }}>
                    <div style={{ fontSize: "30px", textAlign: "center" }}>
                      <AiOutlineLinkedin />
                    </div>
                    <div>LinkedIn</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default ResumeCard;
