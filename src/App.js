import React, { Component } from "react";

import Header from "./components/Header";
import StaysSection from "./components/StaysSection";

import WindbnbLogo from "./images/logo.svg";

import "./App.scss";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header logo={WindbnbLogo} />
        <StaysSection />
      </div>
    );
  }
}
