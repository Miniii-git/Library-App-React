import { useState } from "react";
import Book from "./Book";
import FavoriteBook from "./FavoriteBook";
import styles from "./MainPart.module.css";

function ListofBooks({ searchMode, findedResults, newData, setNewData }) {
  const [favoriteList, setFavoriteList] = useState([]);

  const addToFavoriteList = (id) => {
    const selectedBook = newData.find((book) => book.id === id);

    if (favoriteList.find((book) => book.id === selectedBook.id)) {
      setFavoriteList(
        favoriteList.filter((book) => book.id !== selectedBook.id)
      );
      selectedBook.status = 0;
    } else {
      setFavoriteList((favoriteList) => [...favoriteList, selectedBook]);
      selectedBook.status = 1;
    }
    console.log(selectedBook.status);
  };

  return (
    <div className={styles.MainPart}>
      <div className={styles.allBooksList}>
        {!searchMode ? (
          <div>
            <h2>List of Books</h2>
            {newData.map((book) => (
              <Book
                info={book}
                key={book.id}
                addToFavoriteList={addToFavoriteList}
              />
            ))}
          </div>
        ) : (
          <div>
            <h2>Search Result</h2>
            {findedResults.map((book) => (
              <Book
                info={book}
                key={book.id}
                addToFavoriteList={addToFavoriteList}
              />
            ))}
          </div>
        )}
      </div>
      <div className={styles.favoriteList}>
        <h2>Favorites</h2>
        <div id={styles.background}>
          {!favoriteList[0] && (
            <p id={styles.emptyList}>No Favorite Saved Yet!</p>
          )}
          <div className={styles.sectionForFavoritesBooks}>
            {favoriteList.map((book) => (
              <div key={book.id}>
                <FavoriteBook
                  book={book}
                  addToFavoriteList={addToFavoriteList}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListofBooks;
