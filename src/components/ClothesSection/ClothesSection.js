import React from "react";
import "./ClothesSection.css";

const ClothesSection = ({ openModal }) => {
  return (
    <div className="clothes">
      <div className="clothes__title">Your items</div>
      <button type="text" className="clothes__add-btn" onClick={openModal}>
        + Add new
      </button>
      {/* <div className="card__items">
        {cards.map((card) => (
          <ItemCard
            key={card?._id || card?.id}
            item={card}
            onSelectCard={onCardClick}
          />
        ))}
      </div> */}
    </div>
  );
};

export default ClothesSection;