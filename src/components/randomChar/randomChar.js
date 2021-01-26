import React, { useState } from "react";
import "./randomChar.css";
import GotService from "../../services/gotService";

const RandomChar = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [born, setBorn] = useState("");
  const [died, setDied] = useState("");
  const [culture, setCulture] = useState("");

  const gotService = new GotService();

  const updateChar = () => {
    const id = ~~(Math.random() * 140 + 25);

    gotService.getCharacter(id).then((char) => {
      console.log(char);
      setName(char.name);
      setGender(char.gender);
      setBorn(char.born);
      setDied(char.died);
      setCulture(char.culture);
    });
  };

  return (
    <div className="random-block rounded">
      <h4>Random Character: {name}</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Gender </span>
          <span>{gender}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Born </span>
          <span>{born}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Died </span>
          <span>{died}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">{culture} </span>
          <span>Anarchy</span>
        </li>
      </ul>
    </div>
  );
};

export default RandomChar;
