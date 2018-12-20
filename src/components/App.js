import React, { Component } from "react";
import Header from "./Header";

import "../styles/App.css";
import Content from "./Content";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
