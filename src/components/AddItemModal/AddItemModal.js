import React, { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

// onAddItem refers to handleAddItemSubmit, which is declared in App.js
const AddItemModal = ({ isOpen, onAddItem, handleCloseModal }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  // declare state for each input field

  // use a useEffect hook to reset the input field state to empty strings when
  // the modal is opened

  // create onChange handlers corresponding to each state variable

  function handleSubmit(e) {
    e.preventDefault();
    onAddItem({ name: name, imageUrl: imageUrl, weather: weather });
  }
  function handleImageUrl(e) {
    e.preventDefault();
    setImageUrl(e.target.value);
  }
  function handleWeather(e) {
    e.preventDefault();
    setWeather(e.target.value);
  }
  useEffect(() => {
    if (isOpen) {
      setName("");
      setImageUrl("");
      setWeather("");
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
        id="input-name"
        className="modal__input modal__input_type_card-name"
        placeholder="Name"
        minLength="1"
        maxLength="30"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        required
      />
      <span className="modal__error" id="place-name-error"></span>

      <label className="modal__label">Image</label>
      <input
        type="url"
        name="imageUrl"
        id="input_imageUrl"
        className="modal__input modal__input_type_card-link"
        placeholder="Image URL"
        value={imageUrl}
        onChange={handleImageUrl}
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
            onChange={handleWeather}
          />
          <label className="modal__label_radio" htmlFor="hot">
            Hot
          </label>
        </div>
      </div>
      <div className="modal__input modal__input_type_radio">
        <div>
          <input
            type="radio"
            id="warm"
            name="weatherType"
            value="warm"
            onChange={handleWeather}
          />
          <label className="modal__label_radio" htmlFor="warm">
            Warm
          </label>
        </div>
      </div>
      <div className="modal__input modal__input_type_radio">
        <div>
          <input
            type="radio"
            id="cold"
            name="weatherType"
            value="cold"
            onChange={handleWeather}
          />
          <label className="modal__label_radio" htmlFor="cold">
            Cold
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
