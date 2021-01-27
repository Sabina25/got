import React, { useState } from "react";
import "./randomChar.css";
import GotService from "../../services/gotService";
import Spiner from "../spiner";
import ErrorMessage from "../errorMessage";

const RandomChar = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [born, setBorn] = useState("");
  const [died, setDied] = useState("");
  const [culture, setCulture] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const gotService = new GotService();

  const updateInform = ({ name, gender, born, died, culture }) => {
    setName(name || "unknown");
    setGender(gender || "unknown");
    setBorn(born || "unknown");
    setDied(died || "unknown");
    setCulture(culture || "unknown");
  };

  //~~(Math.random() * 140 + 25)

  const onError = (err) => {
    setError(true);
    setLoading(false);
  };

  //Math.floor(Math.random() * (140 - 25 + 1)) + 25;
  const updateChar = () => {
    let id = 33;
    gotService
      .getCharacter(id)
      .then((char) => {
        updateInform(char);
        setLoading(false);
      })
      .catch(onError);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spiner = loading ? <Spiner /> : null;
  const content = !(loading || error) ? (
    <View
      name={name}
      gender={gender}
      born={born}
      died={died}
      culture={culture}
    />
  ) : null;

  return (
    <div className="random-block rounded">
      {updateChar()}
      {errorMessage}
      {spiner}
      {content}
    </div>
  );
};

const View = ({ name, gender, born, died, culture }) => {
  return (
    <>
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
    </>
  );
};

export default RandomChar;
