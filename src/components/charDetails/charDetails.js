import React, { useEffect, useState } from "react";
import "./charDetails.css";
import GotService from "../../services/gotService";

const CharDetails = ({ charId }) => {
  const [charInfo, setCharInfo] = useState(null);
  const gotService = new GotService();

  const updateChar = () => {
    if (!charId) {
      return;
    }

    gotService.getCharacter(34).then((char) => setCharInfo(char));
  };

  useEffect(() => {
    updateChar();
  }, []);

  console.log(charInfo);

  return (
    <div className="char-details rounded">
      <h4>name</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Gender</span>
          <span>{0 || "unknown"}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Born</span>
          <span>{0 || "unknown"}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Died</span>
          <span>{0 || "unknown"}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Culture</span>
          <span>{0 || "unknown"}</span>
        </li>
      </ul>
    </div>
  );
};

export default CharDetails;
