import React, { useRef, useState } from "react";
import styles from "./app1.module.css";

export const App = () => {
  const [toggleButton, setToggleButton] = useState(true);
  const [startSale, setStartSale] = useState(true);
  const [borderOn, setBorderOn] = useState(false);
  const timerId = useRef();

  const clickStartSale = () => {
    console.log(timerId);
    if (startSale) {
      timerId.current = setInterval(() => {
        setBorderOn((prev) => !prev);
      }, 500);
    } else {
      clearInterval(timerId.current);
      timerId.current = null;
    }
    setStartSale(!startSale);
  };

  const clickToggleButton = () => {
    setToggleButton((prev) => !prev);
    console.log(toggleButton);
  };

  return (
    <>
      <div
        className={`${styles.wrapper} && ${borderOn && styles.intervalBorder}`}
      >
        {toggleButton && <h1>Sale!!</h1>}
      </div>
      <div className={styles.button}>
        <button onClick={clickToggleButton}>Toggle sale</button>
        <button onClick={clickStartSale}>Start sale</button>
      </div>
    </>
  );
};