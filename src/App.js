import React, { Component } from "react";

import Header from "./components/header";

import WindbnbLogo from "./images/logo.svg";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header logo={WindbnbLogo} />
      </div>
    );
  }
}
