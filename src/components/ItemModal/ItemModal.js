import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose, name, onDelete }) => {
  const handleDelete = () => {
    onDelete(selectedCard.id);
  };
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
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
        />
        <div className="modal__image-container">
          <div className="modal__image-info">
            <div>{selectedCard.name}</div>
            <div>Weather: {selectedCard.weather}</div>
          </div>
          <div className="modal__delete" onClick={() => onDelete(handleDelete)}>
            Delete item
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
