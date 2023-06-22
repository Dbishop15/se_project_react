import React, { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

// onAddItem refers to handleAddItemSubmit, which is declared in App.js
const AddItemModal = ({ isOpen, onAddItem, handleCloseModal }) => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [weatherType, setWeatherType] = useState("");

  // declare state for each input field

  // use a useEffect hook to reset the input field state to empty strings when
  // the modal is opened

  // create onChange handlers corresponding to each state variable

  function handleSubmit(e) {
    e.preventDefault();
    onAddItem({ name, link, weatherType });
  }
  function handleName(e) {
    e.preventDefault();
    setName(e.target.value);
  }
  function handleLink(e) {
    e.preventDefault();
    setLink(e.target.value);
  }
  function handleWeatherType(e) {
    e.preventDefault();
    setWeatherType(e.target.value);
  }
  useEffect(() => {
    if (isOpen) {
      setName("");
      setLink("");
      setWeatherType("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="New garment"
      name="newGarment"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">Name</label>
      <input
        type="text"
        name="name"
        // id="input-name"
        className="modal__input modal__input_type_card-name"
        placeholder="Name"
        minLength="1"
        maxLength="30"
        value={name}
        onChange={handleName}
        required
      />
      <span className="modal__error" id="place-name-error"></span>

      <label className="modal__label">Image</label>
      <input
        type="url"
        name="imageUrl"
        // id="input_imageUrl"
        className="modal__input modal__input_type_card-link"
        placeholder="Image URL"
        value={link}
        onChange={handleLink}
        required
      />
      <span className="modal__error" id="place-link-error"></span>
      <p className="modal__subtitle">Select the weather tyep:</p>
      <div className="modal__input modal__input_type_radio">
        <div>
          <input
            type="radio"
            id="hot"
            name="weatherType"
            value="hot"
            onChange={handleWeatherType}
          />
          <label className="modal__label_radio">Hot</label>
        </div>
      </div>
      <div className="modal__input modal__input_type_radio">
        <div>
          <input
            type="radio"
            id="warm"
            name="weatherType"
            value="warm"
            onChange={handleWeatherType}
          />
          <label className="modal__label_radio">Warm</label>
        </div>
      </div>
      <div className="modal__input modal__input_type_radio">
        <div>
          <input
            type="radio"
            id="cold"
            name="weatherType"
            value="cold"
            onChange={handleWeatherType}
          />
          <label className="modal__label_radio">Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
