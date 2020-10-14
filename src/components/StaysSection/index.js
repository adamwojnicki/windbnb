import React, { Component } from "react";

import "./StaysSection.scss";

export default class StaysSection extends Component {
  render() {
    return (
      <section className="stays-section">
        <div className="stays-section__head">
          <h3 className="stays-section__headline">Stays in Finland</h3>
          <span className="stays-section__length">12+ stays</span>
        </div>
      </section>
    );
  }
}
