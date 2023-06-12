import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
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
        <form className="modal__form" name={`${name}`}>
          {children}
          <button type="submit" className="modal__submit-btn">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
