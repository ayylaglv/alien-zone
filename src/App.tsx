import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import { Card } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Card
        border="success"
        style={{ width: "18rem" }}
        className="heading-text"
      >
        <Card.Body>
          <Card.Title>Enhance the visual of your avatar</Card.Title>
          <Card.Text>Customized avatars for better gaming experience</Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Footer></Footer>
    </div>
  );
}

export default App;
