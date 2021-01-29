import React, { useState, useEffect } from "react";
import Spiner from "../spiner";

const Houses = () => {
  const [houses, setHouses] = useState(null);

  const url = "https://www.anapioficeandfire.com/api/houses";

  const loadData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setHouses(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  if (!houses) {
    return <Spiner />;
  }

  return (
    <ul className="item-list list-group" style={{ width: "50%" }}>
      {houses.map((house, i) => {
        return (
          <li li key={i} className="list-group-item">
            {house.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Houses;
