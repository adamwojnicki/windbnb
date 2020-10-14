import React, { Component } from "react";

import "./header.scss";

export default class componentName extends Component {
  render() {
    return (
      <header className="header">
        <figure className="header__brand-logo">
          <img src={this.props.logo} alt="Windbnb logo" />
        </figure>
        <div className="header__filters">
          <input
            type="text"
            name="location"
            id="location"
            value="Helsnki, Finland"
          />
          <input
            type="text"
            name="guests"
            id="guests"
            placeholder="Add guests"
          />
          <button type="submit">Search</button>
        </div>
      </header>
    );
  }
}
