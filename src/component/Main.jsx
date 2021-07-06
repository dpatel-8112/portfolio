import React, { useState, useEffect } from "react";
import style from "../style/Main.module.css";
import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import { ActiveTabContext } from "../context/ActiveTabContext";

function Main() {
  const [inputValue, setInputValue] = useState("");

  const active = React.useContext(ActiveTabContext);

  const obj = [
    "Hi ...",
    "My Name is Devarshi Patel.",
    "I write code and make stuff.",
    "I Develop Web Application Using React.",
  ];

  let arrayIndex = 0;
  let stringIndex = 0;

  const arrayTravelsal = () => {
    if (stringIndex == obj[arrayIndex].length) {
      setInputValue("");

      stringIndex = 0;
      if (arrayIndex == obj.length - 1) {
        arrayIndex = 0;
      } else {
        arrayIndex = arrayIndex + 1;
      }
    } else {
      setInputValue((pre) => pre + obj[arrayIndex][stringIndex]);
      stringIndex = stringIndex + 1;
    }
  };

  useEffect(() => {
    const inputInterval = setInterval(arrayTravelsal, 135);
    return () => {
      clearInterval(inputInterval);
    };
  }, []);
  return (
    <div className={style.Main}>
      <div className={style.MainContainer}>
        <div className={style.Image1}>
          <img src={img1} alt="" />
          <div className={style.Image2}>
            <img src={img2} alt="" />
          </div>
        </div>

        <div className={style.Input}>
          <input type="text" value={`${inputValue}`} />
        </div>
        <div className={style.Buttons}>
          <div>
            <button onClick={() => active.activeTabHandler("Google Resume")}>
              Google Resume
            </button>
            <button onClick={() => active.activeTabHandler("Contact")}>
              I'm Feeling Good
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
