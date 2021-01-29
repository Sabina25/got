import React, { useState, useEffect } from "react";
import Spiner from "../spiner";

const Books = () => {
  const [books, setBooks] = useState(null);

  const url = "https://www.anapioficeandfire.com/api/books";

  const loadData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setBooks(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  if (!books) {
    return <Spiner />;
  }

  return (
    <ul className="item-list list-group" style={{ width: "50%" }}>
      {books.map((book, i) => {
        return (
          <li li key={i} className="list-group-item">
            {book.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Books;
