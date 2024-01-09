import React from "react";
import styles from "./FavoriteBook.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

export default function FavoriteBook({ book }) {
  return (
    <div className={styles.FavoriteBook}>
      <img src={book.img} />
      <p>{book.title}</p>
      <FontAwesomeIcon icon={faCircleXmark} id={styles.CircleXmark} />
    </div>
  );
}
