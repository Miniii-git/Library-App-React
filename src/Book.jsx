import { useState } from "react";
import styles from "./Book.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as heartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as heartregular } from "@fortawesome/free-regular-svg-icons";
import { faStar as starSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as starregular } from "@fortawesome/free-regular-svg-icons";

function Book({ info, addToFavoriteList }) {
  const likeHandler = () => {
    addToFavoriteList(info.id);
  };
  return (
    <div className={styles.Book}>
      <div className={styles.bookImage}>
        <a href={info.link}>
          <img src={info.img} title={info.title} />
        </a>
      </div>
      <div className={styles.bookInformatoin}>
        <h4>{info.title}</h4>
        <p>Author: {info.author}</p>
        <p>Languge: {info.language}</p>
        <p>Year: {info.year}</p>
        <p>Pages: {info.pages} </p>
      </div>
      <div className={styles.like}>
        <FontAwesomeIcon
          id={styles.heart}
          icon={info.status === 1 ? starSolid : starregular}
          onClick={likeHandler}
          style={{
            color: info.status === 1 ? "#99FF66" : "white",
          }}
        />

        {/*<FontAwesomeIcon
          id={styles.heart}
          icon={info.status === 1 ? heartSolid : heartregular}
          onClick={likeHandler}
          style={{
            color: info.status === 1 ? "#99FF66" : "white",
          }}
        />*/}
      </div>
    </div>
  );
}

export default Book;
