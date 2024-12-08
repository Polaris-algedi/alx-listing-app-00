import React from "react";
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  onButtonClick,
}) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={onButtonClick}>Details</button>
      </div>
    </div>
  );
};

export default Card;
