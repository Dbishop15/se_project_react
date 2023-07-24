import React from "react";
import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import "../blocks/SideBar.css";

const SideBar = ({ onSignout, openModal, currentUser }) => {
  const { noAvatar } = useContext(CurrentUserContext);
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        {currentUser.avatar !== "" ? (
          <img
            src={currentUser.avatar}
            className="sidebar__avatar"
            alt="user-avatar"
          />
        ) : (
          <p className="sidebar__noavatar">{noAvatar}</p>
        )}
        <div className="sidebar__user-name">{currentUser.name}</div>
      </div>

      <button className="sidebar__button" onClick={openModal}>
        Change profile data
      </button>
      <button className="sidebar__button" type="button" onClick={onSignout}>
        Sign Out
      </button>
    </div>
  );
};

export default SideBar;
