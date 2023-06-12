import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="card__item">
      <div className="card__item-info">
        <div>
          <p className="card__name">{item.name}</p>
        </div>
        <img
          src={item.link}
          className="card__image"
          alt={item.name}
          onClick={() => onSelectCard(item)}
        />
      </div>
    </div>
  );
};

export default ItemCard;
