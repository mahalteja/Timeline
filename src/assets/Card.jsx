import React from "react";
import './Card.css'

const Card = ({year,title,text,position}) => {
  return (
    <div className="card-container" style={{marginLeft:position.marginLeft}}>
      <div className="circle"></div>
      <div className="card-left">
        <h2 className="card-heading">{year}</h2>
        <p className="card-subtext">{title}</p>
      </div>
      <p className="card-body">
        {text}
      </p>
    </div>
  );
};

export default Card;
