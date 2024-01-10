import React from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className={styles.Header}>
      <h1>
        <FontAwesomeIcon icon={faBookOpen} /> Library App{" "}
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
