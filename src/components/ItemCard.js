import React from "react";
import "../blocks/ItemCard.css";
import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import liked from "../images/liked.svg";
import unliked from "../images/unliked.svg";

const ItemCard = ({ item, onSelectCard, onCardLike }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const isLiked = item.likes.some((user) => user === currentUser._id);
  const itemLikeButtonClassName = `card__like ${
    currentUser ? "cards__like_active" : "cards__like_inactive"
  }`;
  const renderNotLiked = () => {
    return (
      <button
        className={itemLikeButtonClassName}
        onClick={() => onCardLike(item._id, isLiked)}
      >
        <img
          className="card__heart"
          src={unliked}
          alt="item card is disliked icon"
        />
      </button>
    );
  };
  const renderLiked = () => {
    return (
      <button
        className={itemLikeButtonClassName}
        onClick={() => onCardLike(item._id, isLiked)}
      >
        <img
          className="card__heart"
          src={liked}
          alt="item card is liked icon"
        />
      </button>
    );
  };
  return (
    <div key={item._id || item.id} className="card__item">
      <div className="card__item-info">
        <p className="card__name">{item.name}</p>
        {isLiked ? renderLiked() : renderNotLiked()}
      </div>
      <img
        src={item.link || item.imageUrl}
        className="card__image"
        alt={item.name}
        onClick={() => onSelectCard(item, isLiked)}
      />
    </div>
  );
};

export default ItemCard;
