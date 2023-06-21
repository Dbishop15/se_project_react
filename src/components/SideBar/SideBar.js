import React from "react";
import avatarDefault from "../../images/avatarDefault.png";
import "./SideBar.css";

const SideBar = () => {
  const username = "Terrence Tegegene";
  return (
    <div className="sidebar">
      <img src={avatarDefault} className="sidebar__avatar" alt="user-avatar" />
      <div className="sidebar__user-name">{username}</div>
    </div>
  );
};

export default SideBar;
