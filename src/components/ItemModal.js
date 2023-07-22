import "../blocks/ItemModal.css";
import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

const ItemModal = ({ selectedCard, onClose, name, onDelete }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const isOwn = selectedCard.owner === currentUser._id;
  console.log(selectedCard.owner);
  console.log(currentUser._id);
  const itemDeleteButtonClassName = `modal__delete-btn ${
    isOwn ? "modal__delete-btn_visible" : "modal__delete-btn_hidden"
  }`;
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
          <div
            className={itemDeleteButtonClassName}
            onClick={() => onDelete(selectedCard)}
          >
            Delete item
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
