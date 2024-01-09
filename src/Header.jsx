import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.Header}>
      {/*<FontAwesomeIcon icon={faAddressBook} className={styles.iconContactApp} />*/}{" "}
      <h1> Library App </h1>
      <div id={styles.Mini}>
        <a href="#" target="-blank">
          Made By Mini
        </a>{" "}
        | React.js
      </div>
    </div>
  );
}

export default Header;
