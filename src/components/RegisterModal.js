import React, { useEffect, useState } from "react";
import ModalWithForm from "./ModalWithForm";

const RegisterModal = ({
  isOpen,
  onSignUp,
  handleCloseModal,
  buttonText,
  altButtonText,
  altClick,
}) => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const [avatar, setAvatar] = useState("");
  const handleAvatarChange = (e) => {
    console.log(e.target.value);
    setAvatar(e.target.value);
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    onSignUp({ email, password, name, avatar });
  }

  useEffect(() => {
    if (isOpen === true) {
      setEmail("");
      setPassword("");
      setName("");
      setAvatar("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Sign up"
      name="singUp"
      onClose={handleCloseModal}
      isOpen={isOpen}
      buttonText={buttonText}
      altButtonText={altButtonText}
      handleAltClick={altClick}
      onSubmit={handleSubmit}
    >
      <label className="modal__label" id="email-label">
        Email*
      </label>
      <input
        value={email}
        type="email"
        name="email"
        id="input-email"
        className="modal__input modal__input_type_signup-emial"
        placeholder="Email"
        minLength="1"
        maxLength="30"
        onChange={handleEmailChange}
        required
      />
      <span className="modal__error" id="place-email-error"></span>

      <label className="modal__label" id="password-label">
        Password*
      </label>
      <input
        value={password}
        type="password"
        name="password"
        id="input-password"
        className="modal__input modal__input_type_signup-password"
        placeholder="Password"
        minLength="1"
        maxLength="30"
        onChange={handlePasswordChange}
        required
      />
      <span className="modal__error" id="place-password-error"></span>

      <label className="modal__label" id="name-label">
        Name
      </label>
      <input
        value={name}
        type="text"
        name="name"
        id="input-name"
        className="modal__input modal__input_type_signup-name"
        placeholder="Name"
        minLength="1"
        maxLength="30"
        onChange={handleNameChange}
        required
      />
      <span className="modal__error" id="place-name-error"></span>

      <label className="modal__label" id="avatar-label">
        Avatar URL
      </label>
      <input
        type="url"
        name="avatar"
        id="input_avatar"
        className="modal__input modal__input_type_avatar-link"
        placeholder="Avatar URL"
        value={avatar}
        onChange={handleAvatarChange}
      />
      <span className="modal__error" id="place-link-error"></span>
    </ModalWithForm>
  );
};

export default RegisterModal;
