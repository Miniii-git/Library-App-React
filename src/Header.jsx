import React from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { PiBooksLight } from "react-icons/pi";
import { MdOutlineStarPurple500 } from "react-icons/md";

function Header() {
  return (
    <div className={styles.Header}>
      <h1>
        <PiBooksLight id={styles.bookIcon} /> Library App{" "}
        <MdOutlineStarPurple500 style={{ fontSize: "14px" }} />
      </h1>
      <div id={styles.Mini}>
        <a href="#" target="-blank">
          Made By Mini
        </a>{" "}
        <span>| React.js</span>
      </div>
    </div>
  );
}

export default Header;
