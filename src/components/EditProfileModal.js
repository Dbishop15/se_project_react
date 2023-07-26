import React, { useContext, useEffect, useState } from "react";
import ModalWithForm from "./ModalWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

const EditProfileModal = ({
  isOpen,
  onEditProfile,
  handleCloseModal,
  isLoading,
}) => {
  const { currentUser } = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const [avatar, setAvatar] = useState("");
  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    onEditProfile({ name, avatar });
  }

  useEffect(() => {
    if (isOpen) {
      setName(currentUser.name);
      setAvatar(currentUser.avatar);
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Change profile data"
      name="edit-profile"
      onClose={handleCloseModal}
      isOpen={isOpen}
      buttonText={isLoading ? "Saving..." : "Save"}
      onSubmit={handleSubmit}
    >
      <label className="modal__label" id="name-label">
        Name*
      </label>
      <input
        value={name}
        type="text"
        name="name"
        id="input-name"
        className="modal__input modal__input_type_name"
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
        className="modal__input modal__input_type-avatar-link"
        placeholder="Avatar URL"
        value={avatar}
        onChange={handleAvatarChange}
      />
      <span className="modal__error" id="place-link-error"></span>
    </ModalWithForm>
  );
};

export default EditProfileModal;
