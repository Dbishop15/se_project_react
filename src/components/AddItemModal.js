import React, { useEffect, useState } from "react";
import ModalWithForm from "./ModalWithForm";

const AddItemModal = ({ isOpen, onAddItem, handleCloseModal, isLoading }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [imageUrl, setImageUrl] = useState("");
  const handleImageChange = (e) => {
    setImageUrl(e.target.value);
  };
  const [weather, setWeather] = useState("");
  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    const card = {
      name: name,
      imageUrl: imageUrl,
      weather: weather,
    };
    onAddItem(card);
  }

  useEffect(() => {
    if (isOpen === true) {
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
      buttonText={isLoading ? "Saving..." : "Save"}
    >
      <label className="modal__label" id="name-label">
        Name
      </label>
      <input
        value={name}
        type="text"
        name="name"
        id="input-name"
        className="modal__input modal__input_type_card-name"
        placeholder="Name"
        minLength="1"
        maxLength="30"
        onChange={handleNameChange}
        required
      />
      <span className="modal__error" id="place-name-error"></span>

      <label className="modal__label" id="image-label">
        Image
      </label>
      <input
        type="url"
        name="link"
        id="input_imageUrl"
        className="modal__input modal__input_type_card-link"
        placeholder="Image URL"
        value={imageUrl}
        onChange={handleImageChange}
        required
      />
      <span className="modal__error" id="place-link-error"></span>
      <p className="modal__subtitle">Select the weather tyep:</p>
      <div className="modal__input modal__input_type_radio">
        <div>
          <input
            type="radio"
            id="hot"
            name="weather-type"
            value="hot"
            onChange={handleWeatherChange}
          />
          <label className="modal__label_radio">Hot</label>
        </div>
      </div>
      <div className="modal__input modal__input_type_radio">
        <div>
          <input
            type="radio"
            id="warm"
            name="weather-type"
            value="warm"
            onChange={handleWeatherChange}
          />
          <label className="modal__label_radio">Warm</label>
        </div>
      </div>
      <div className="modal__input modal__input_type_radio">
        <div>
          <input
            type="radio"
            id="cold"
            name="weather-type"
            value="cold"
            onChange={handleWeatherChange}
          />
          <label className="modal__label_radio">Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
