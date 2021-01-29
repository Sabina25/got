import React, { useState } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";

import Houses from "../Houses";
import Books from "../Books";
import CharacterPage from "../CharacterPage";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./app.css";

const App = () => {
  return (
    <Router>
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <Route path="/characters" exact component={CharacterPage} />
          <Route path="/books" exact component={Books} />
          <Route path="/houses" exact component={Houses} />
        </Container>
      </>
    </Router>
  );
};

export default App;
