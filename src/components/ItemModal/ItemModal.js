import "./ItemModal.css";

const ItemModal = ({ item, selectedCard, onClose, name, onDelete }) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__container-itemPreview">
        <button
          className="modal__close"
          id="close-add-modal"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="modal__image-preview"
          src={item?.imageUrl || item?.link}
          alt={item?.name}
        />
        <div className="modal__image-container">
          <div className="modal__image-info">
            <div>{item?.name}</div>
            <div>Weather: {item?.weather}</div>
          </div>
          <div className="modal__delete" onClick={() => onDelete(selectedCard)}>
            Delete item
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
