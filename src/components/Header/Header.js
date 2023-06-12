import "./Header.css";
import avatarDefault from "../../images/avatarDefault.png";
import navlink from "../../images/navlink.svg";
import header__logo from "../../images/header__logo.svg";
import { currentDate } from "../../utils/constants";

const Header = ({ onCreateModal, currentLocation }) => {
  const username = "Terrence Tegegene";
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-container">
          <div className="header__logo">
            <img src={header__logo} alt="logo" />
          </div>
          <div className="header__date">
            {currentDate}, {currentLocation}
          </div>
        </div>
        <div className="header__nav">
          <ul className="header__nav-container">
            <li>
              <button
                type="text"
                onClick={onCreateModal}
                className="header__nav-button"
              >
                + Add clotches
              </button>
            </li>
            <li>
              <div className="header__nav-link">{username}</div>
            </li>
            <li>
              <img
                className="header__nav-user"
                src={avatarDefault}
                alt="user avatar"
              />
            </li>
          </ul>
        </div>
        <div className="header__navigation">
          <button
            onClick={onCreateModal}
            className="header__navigation-btn"
            id="nav-btn"
            aria-label="nav-info-btn"
          >
            <img
              className="header__navigation-btn-image"
              src={navlink}
              alt="navigation"
            />
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;