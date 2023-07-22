import React, { useContext } from "react";
import "../blocks/ClothesSection.css";
import ItemCard from "./ItemCard";
import CurrentUserContext from "../contexts/CurrentUserContext";

const ClothesSection = ({ openModal, items, onSelectCard, onCardLike }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const userItems = items.filter((item) => item?.owner === currentUser._id);
  console.log(currentUser._id);

  return (
    <div className="clothes">
      <div className="clothes__info">
        <div className="clothes__title">Your items</div>
        <button type="text" className="clothes__add-btn" onClick={openModal}>
          + Add new
        </button>
      </div>
      <div className="clothes__items">
        {userItems.map((item) => {
          return (
            <ItemCard
              key={item.id || item._id}
              item={item}
              onSelectCard={onSelectCard}
              currentUser={currentUser}
              onCardLike={onCardLike}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ClothesSection;
