import { useState } from "react";

function Book({ info, addToFavoriteList, findedResults }) {
  const st = { padding: "5px", borderRadius: "100%", fontSize: "15px" };
  return (
    <div style={{ margin: "20px" }}>
      <img src={info.img} />
      <h4>{info.title}</h4>
      <p>{info.author}</p>
      <p>{info.language}</p>
      <p>{info.pages} pages</p>
      <button onClick={() => addToFavoriteList(info.id)} style={st}>
        ♥
      </button>
    </div>
  );
}

export default Book;
