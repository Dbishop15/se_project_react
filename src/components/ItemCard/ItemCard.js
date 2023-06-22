import React from "react";
import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  const handleCardClick = () => {
    onSelectCard(item);
  };

  return (
    <div className="card__item">
      <div className="card__item-info">
        <div>
          <p className="card__name">{item.name}</p>
        </div>
        <img
          src={item.link || item.imageUrl}
          className="card__image"
          alt={item.name}
          onClick={handleCardClick}
        />
      </div>
    </div>
  );
};

export default ItemCard;
