import React, { useEffect, useState } from "react";
import "./itemList.css";
import GotService from "../../services/gotService";
import Spiner from "../spiner";

const ItemList = ({ onCharSelected }) => {
  const [charList, setCharList] = useState(null);
  const [loading, setLoading] = useState(false);

  const gotService = new GotService();

  useEffect(() => {
    gotService.getAllCharacters().then((charlist) => {
      setCharList(charlist);
      setLoading(!loading);
    });
  }, []);

  if (!charList) {
    return <Spiner />;
  }

  return (
    <ul className="item-list list-group">
      {charList.map((char, i) => {
        return (
          <li
            li
            key={i}
            className="list-group-item"
            onClick={() => onCharSelected(i)}
          >
            {char.name}
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;
