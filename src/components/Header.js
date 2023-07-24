import "../blocks/Header.css";
import header__logo from "../images/header__logo.svg";
import ToggleSwitch from "./ToggleSwitch";
import { Link } from "react-router-dom";
import { currentDate } from "../utils/constants";

const Header = ({
  onAddButtonClick,
  currentLocation,
  onRegisterButton,
  onLoginButton,
  isLoggedIn,
  currentUser,
}) => {
  const { name, avatar } = currentUser;
  const renderUserAvatar = () => {
    if (avatar) {
      return (
        <img className="header__nav-user" src={avatar} alt="user avatar" />
      );
    } else if (name) {
      const initials = name.charAt(0).toUpperCase();
      return <div className="header__avatar-placeholder">{initials}</div>;
    } else {
      return null;
    }
  };
  const renderAuthenticateContent = () => {
    return (
      <>
        <button
          type="text"
          onClick={onAddButtonClick}
          className="header__nav-button"
        >
          + Add clotches
        </button>
        <Link to="/profile" className="header__nav-link">
          {name}
        </Link>
        {renderUserAvatar()}
      </>
    );
  };

  const renderUnauthenticateContent = () => {
    return (
      <>
        <button
          className="header__nav-button"
          type="button"
          onClick={onRegisterButton}
        >
          Sign Up
        </button>
        <button
          className="header__nav-button"
          type="button"
          onClick={onLoginButton}
        >
          Log In
        </button>
      </>
    );
  };
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-container">
          <Link to="/" className="header__logo">
            <img src={header__logo} alt="logo" />
          </Link>
          <div className="header__date">
            {currentDate}, {currentLocation}
          </div>
        </div>
        <div className="header__nav">
          <ToggleSwitch />
          {!isLoggedIn
            ? renderUnauthenticateContent()
            : renderAuthenticateContent()}
        </div>
      </div>
    </header>
  );
};
export default Header;
