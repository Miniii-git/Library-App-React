import { useState } from "react";

import { books } from "./constants/mockData";

import Book from "./Book";
import FavoriteBooks from "./FavoriteCompartment";

function ListofBooks({ searchMode, findedResults }) {
  const [favoriteList, setFavoriteList] = useState([]);

  const addToFavoriteList = (id) => {
    const selectedBook = books.find((book) => book.id === id);
    if (favoriteList.find((book) => book.id === selectedBook.id)) {
      setFavoriteList(
        favoriteList.filter((book) => book.id !== selectedBook.id)
      );
    } else {
      setFavoriteList((favoriteList) => [...favoriteList, selectedBook]);
    }
  };

  return (
    <>
      <div>
        <FavoriteBooks favoriteList={favoriteList} />
      </div>
      {!searchMode ? (
        <div>
          <h1>List of Books</h1>
          {books.map((book) => (
            <Book
              info={book}
              key={book.id}
              addToFavoriteList={addToFavoriteList}
            />
          ))}
        </div>
      ) : (
        <div>
          <h1>Search Result</h1>
          {findedResults.map((book) => (
            <Book
              info={book}
              key={book.id}
              addToFavoriteList={addToFavoriteList}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default ListofBooks;
