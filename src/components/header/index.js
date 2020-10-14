import React, { Component } from "react";

export default class componentName extends Component {
  render() {
    return (
      <header>
        <figure className="brand-logo">
          <img src={this.props.logo} alt="Windbnb logo" />
        </figure>
        <div className="filters">
          <input type="text" name="location" id="location" />
          <input type="text" name="guests" id="guests" />
          <button type="submit">Search</button>
        </div>
      </header>
    );
  }
}
