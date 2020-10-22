import React from "react";
import "./StayCard.scss";

export default ({ stay }) => {
  return (
    <li className="stay-card">
      <figure className="stay-card__img">
        <img src={stay.photo} alt={stay.title} />
      </figure>
      <div className="stay-card__info">
        {stay.superHost ? (
          <span className="stay-card__superhost">SUPER HOST</span>
        ) : (
          ""
        )}
        <span className="stay-card__beds">
          {stay.type} &bull; {stay.beds} beds
        </span>
        <span className="stay-card__rating">{stay.rating}</span>
      </div>
      <h4 className="stay-card__title">{stay.title}</h4>
    </li>
  );
};
