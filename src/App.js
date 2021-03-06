import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./mysass.scss";

class App extends Component {
  render() {
    return (
      <div className="content">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
