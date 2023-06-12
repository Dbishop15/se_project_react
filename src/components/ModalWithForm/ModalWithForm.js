import "./ModalWithForm.css";

const ModalWithForm = ({
  buttonText = "Add garment",
  title,
  onClose,
  name,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__container">
        <button
          className="modal__close"
          id="close-add-modal"
          type="button"
          onClick={onClose}
        ></button>
        <h3 className="modal__title">{title}</h3>
        <form className="modal__form" name={`${name}`} id="add-form">
          <label className="modal__label">Name</label>
          <input
            type="text"
            name="name"
            id="place-name"
            className="modal__input modal__input_type_card-name"
            placeholder="Name"
            minLength="1"
            maxLength="30"
            required
          />
          <span className="modal__error" id="place-name-error"></span>

          <label className="modal__label">Image</label>
          <input
            type="url"
            name="link"
            id="place-link"
            className="modal__input modal__input_type_card-link"
            placeholder="Image URL"
            required
          />
          <span className="modal__error" id="place-link-error"></span>

          <p className="modal__subtitle">Select the weather tyep:</p>
          <div className="modal__input modal__input_type_radio">
            <div>
              <input type="radio" id="hot" name="weatherType" value="hot" />
              <label className="modal__label_radio" htmlFor="hot">
                Hot
              </label>
            </div>
          </div>
          <div className="modal__input modal__input_type_radio">
            <div>
              <input type="radio" id="warm" name="weatherType" value="warm" />
              <label className="modal__label_radio" htmlFor="warm">
                Warm
              </label>
            </div>
          </div>
          <div className="modal__input modal__input_type_radio">
            <div>
              <input type="radio" id="cold" name="weatherType" value="cold" />
              <label className="modal__label_radio" htmlFor="cold">
                Cold
              </label>
            </div>
          </div>
        </form>
        <button type="submit" className="modal__submit-btn">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ModalWithForm;
