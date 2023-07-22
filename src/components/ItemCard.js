import React from "react";
import "../blocks/ItemCard.css";
import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import heartliked from "../images/heartliked.png";
import heartdislike from "../images/heartdislike.png";

const ItemCard = ({ item, onSelectCard, onCardLike, loggedIn }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const isLiked = item.likes.some((user) => user === currentUser._id);
  const itemLikeButtonClassName = `cards__like ${
    loggedIn ? "cards__like_active" : "cards__like_inactive"
  }`;

  const renderNotLiked = () => {
    return (
      <button
        className={itemLikeButtonClassName}
        onClick={() => onCardLike(item._id, isLiked)}
      >
        <img
          className="card__heart"
          src={heartdislike}
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
          src={heartliked}
          alt="item card is liked icon"
        />
      </button>
    );
  };

  return (
    <div key={item.id || item._id} className="card__item">
      <div className="card__item-info">
        <p className="card__name">{item.name}</p>
        {isLiked ? renderLiked() : renderNotLiked()}
        <img
          src={item.link || item.imageUrl}
          className="card__image"
          alt={item.name}
          onClick={() => onSelectCard(item, isLiked)}
        />
      </div>
    </div>
  );
};

export default ItemCard;
