import Header from "./Header";
import Search from "./Search";
import MainPart from "./MainPart";

import { useState } from "react";
import { books } from "./constants/mockData";

const DataWithStatus = books.map((book) => ({ ...book, status: 0 }));

function App() {
  const [newData, setNewData] = useState(DataWithStatus);
  const [typingSearch, setTypingSearch] = useState("");
  const [findedResults, setFindedResults] = useState([]);
  const [searchMode, setSearchMode] = useState(false);

  const changeHandler = (event) => setTypingSearch(event.target.value);

  const searchHandler = (event) => {
    event.preventDefault();
    const regex = new RegExp(typingSearch, "gi");
    const matchedItems = newData.filter((book) => book.title.match(regex));
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
      <Search
        typingSearch={typingSearch}
        changeHandler={changeHandler}
        searchHandler={searchHandler}
      />
      <br />
      <MainPart
        searchMode={searchMode}
        findedResults={findedResults}
        newData={newData}
        setNewData={setNewData}
      />
    </>
  );
}

export default App;
