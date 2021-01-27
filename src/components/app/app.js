import React, { useState } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ItemList from "../itemList";
import CharDetails from "../charDetails";
import "./app.css";

const App = () => {
  const [toggler, setToggle] = useState(true);
  const [selectedChar, setSelectedChar] = useState(null);

  const onCharSelected = (id) => {
    setSelectedChar(id);
  };

  return (
    <>
      <Container>
        <Header />
      </Container>
      <Container>
        <Row>
          <Col lg={{ size: 5, offset: 0 }}>
            {toggler ? <RandomChar /> : null}
            <button onClick={() => setToggle(!toggler)}>
              Toggle random charter
            </button>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <ItemList onCharSelected={onCharSelected} />
          </Col>
          <Col md="6">
            <CharDetails charId={selectedChar} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
