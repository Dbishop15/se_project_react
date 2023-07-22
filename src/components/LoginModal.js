import React, { useEffect, useState } from "react";
import ModalWithForm from "./ModalWithForm";

const LoginModal = ({
  isOpen,
  onSignIn,
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

  function handleSubmit(e) {
    e.preventDefault();
    onSignIn({ email, password });
  }

  useEffect(() => {
    if (isOpen === true) {
      setEmail("");
      setPassword("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Log in"
      name="login"
      onClose={handleCloseModal}
      isOpen={isOpen}
      buttonText={buttonText}
      altButtonText={altButtonText}
      handleAltClick={altClick}
      onSubmit={handleSubmit}
    >
      <label className="modal__label" id="email-label">
        Email
      </label>
      <input
        value={email}
        type="email"
        name="email"
        id="input-email"
        className="modal__input modal__input_type_login-emial"
        placeholder="Email"
        onChange={handleEmailChange}
        required
      />
      <span className="modal__error" id="place-email-error"></span>

      <label className="modal__label" id="password-label">
        Password
      </label>
      <input
        value={password}
        type="password"
        name="password"
        id="input-password"
        className="modal__input modal__input_type_login-password"
        placeholder="Password"
        onChange={handlePasswordChange}
        required
      />
      <span className="modal__error" id="place-password-error"></span>
    </ModalWithForm>
  );
};

export default LoginModal;
