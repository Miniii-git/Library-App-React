import Header from "./Header";
import ListofBooks from "./ListofBooks";
import { useState } from "react";
import { books } from "./constants/mockData";
import styles from "./App.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [typingSearch, setTypingSearch] = useState("");
  const [findedResults, setFindedResults] = useState([]);
  const [searchMode, setSearchMode] = useState(false);

  const changeHandler = (event) => setTypingSearch(event.target.value);

  const searchHandler = (event) => {
    event.preventDefault();
    const regex = new RegExp(typingSearch, "gi");
    const matchedItems = books.filter((book) => book.title.match(regex));
    setFindedResults(matchedItems);
    setTypingSearch("");
    if (typingSearch) {
      setSearchMode(true);
    } else {
      setSearchMode(false);
    }
  };

  return (
    <>
      <Header />
      <br />

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

      <br />
      <ListofBooks searchMode={searchMode} findedResults={findedResults} />
    </>
  );
}

export default App;
