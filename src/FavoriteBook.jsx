import React from "react";
import styles from "./FavoriteBook.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

export default function FavoriteBook({ book, addToFavoriteList }) {
  const deleteHandler = () => {
    addToFavoriteList(book.id);
  };
  return (
    <>
      <div className={styles.FavoriteBook}>
        <a href={book.link}>
          <img src={book.img} title={book.title} />
        </a>
        <p>{book.title}</p>
        <FontAwesomeIcon
          icon={faCircleXmark}
          id={styles.CircleXmark}
          onClick={deleteHandler}
        />
      </div>
      <div className={styles.imageSmall}>
        <img src={book.img} />
        <FontAwesomeIcon
          icon={faCircleXmark}
          id={styles.CircleXmark}
          onClick={deleteHandler}
        />
      </div>
    </>
  );
}
