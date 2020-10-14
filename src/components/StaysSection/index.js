import React, { Component } from "react";

import StayCard from "../StayCard";

import "./StaysSection.scss";

export default class StaysSection extends Component {
  renderStays() {
    return this.props.stays.map((stay) => (
      <StayCard stay={stay} key={stay.title} />
    ));
  }
  render() {
    return (
      <section className="stays-section">
        <div className="stays-section__head">
          <h3 className="stays-section__headline">Stays in Finland</h3>
          <span className="stays-section__length">12+ stays</span>
        </div>
        <ul className="stays-list">{this.renderStays()}</ul>
      </section>
    );
  }
}
