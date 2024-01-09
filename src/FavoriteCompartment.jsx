import React from "react";
import FavoriteBook from "./FavoriteBook";

function FavoriteCompartment({ favoriteList }) {
  return (
    <div>
      <ul>
        {favoriteList.map((book) => (
          <li style={{ margin: "10px", padding: "5px" }}>
            <FavoriteBook book={book} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteCompartment;
