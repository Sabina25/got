import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import ItemList from "../itemList";
import CharDetails from "../charDetails";
import RandomChar from "../randomChar";

const CharacterPage = () => {
  const [toggler, setToggle] = useState(true);
  const [selectedChar, setSelectedChar] = useState(null);

  const onCharSelected = (char) => {
    setSelectedChar(char);
  };

  return (
    <Row>
      <Col lg={{ size: 5, offset: 0 }}>
        {toggler ? <RandomChar /> : null}
        <button onClick={() => setToggle(!toggler)}>
          Toggle random charter
        </button>
      </Col>

      <Col md="6">
        <ItemList onCharSelected={onCharSelected} />
      </Col>
      <Col md="6">
        <CharDetails charId={selectedChar} />
      </Col>
    </Row>
  );
};

export default CharacterPage;
