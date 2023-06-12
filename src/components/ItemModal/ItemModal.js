import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose, name }) => {
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
          src={selectedCard.link}
          alt={selectedCard.name}
        />
        <div className="modal__image-info">
          <div>{selectedCard.name}</div>
          <div>Weather: {selectedCard.weather}</div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
