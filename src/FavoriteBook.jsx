import React from "react";

export default function FavoriteBook({ book }) {
  return (
    <div>
      <h6>{book.title}</h6>
      <img src={book.img} style={{ width: "60px" }} />
    </div>
  );
}
