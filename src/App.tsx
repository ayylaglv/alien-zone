import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="Footer"></div>
      <button type="button" className="btn btn-primary">
        <div className="button-text">Primary</div>
      </button>
      <Footer></Footer>
    </div>
  );
}

export default App;
