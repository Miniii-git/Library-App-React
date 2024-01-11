import React from "react";
import styles from "./Search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search({ searchHandler, changeHandler, typingSearch }) {
  return (
    <div>
      <form className={styles.search} onSubmit={searchHandler}>
        <input
          type="text"
          placeholder=" Search"
          onChange={changeHandler}
          value={typingSearch}
        />
        <button>
          <FontAwesomeIcon
            id={styles.zarebin}
            icon={faMagnifyingGlass}
            type="submit"
          />
        </button>
      </form>
    </div>
  );
}
