import { Route, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import "../blocks/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ItemModal from "./ItemModal";
import Profile from "./Profile";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";
import {
  filterDataFromWeatherAPI,
  getForecastWeather,
} from "../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import AddItemModal from "./AddItemModal";
import * as api from "../utils/api";
import ProtectedRoute from "./ProtectedRoute";
import * as auth from "../utils/auth";
import CurrentUserContext from "../contexts/CurrentUserContext";
import EditProfileModal from "./EditProfileModal";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [token, setToken] = useState("");
  const [noAvatar, setNoAvatar] = useState("");

  const history = useHistory();

  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleRegisterModal = () => {
    setActiveModal("signup");
  };
  const handleLoginModal = () => {
    setActiveModal("signin");
  };
  const handleEditProfileModal = () => {
    setActiveModal("editprofile");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };
  const handleSelectedCard = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };
  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };
  const handleAddItemSubmit = ({ name, imageUrl, weather }) => {
    console.log(token);
    api
      .addItems(
        {
          name,
          imageUrl,
          weather,
        },
        token
      )
      .then((res) => {
        setClothingItems([res.data, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLikeClick = (itemId, isLiked) => {
    console.log(itemId);
    console.log(isLiked);
    if (!isLiked) {
      api
        .addCardLike({ id: itemId, user: currentUser }, token)
        .then((updatedCard) => {
          console.log(updatedCard);

          setClothingItems((items) => {
            return items.map((item) =>
              item.id === itemId ? updatedCard.data : item
            );
          });
        })
        .catch((err) => console.log(err));
    } else {
      api
        .removeCardLike({ id: itemId, user: currentUser }, token)
        .then((updatedCard) => {
          console.log(updatedCard);

          setClothingItems((items) => {
            return items.map((item) =>
              item.id === itemId ? updatedCard.data : item
            );
          });
        })
        .catch((err) => console.log(err));
    }
  };
  const handleDeleteItem = (deleteItem) => {
    console.log(deleteItem);
    api
      .deleteItems(deleteItem._id, token)
      .then(() => {
        const filteredCards = clothingItems.filter(
          (card) => deleteItem._id !== card._id
        );
        setClothingItems(filteredCards);
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSignUp = ({ email, password, name, avatar }) => {
    auth
      .signUp({ email, password, name, avatar })
      .then((res) => {
        if (res) {
          setCurrentUser(res.data);
          handleSignIn({ email, password });
          setCurrentUser({ name, avatar });
          handleCloseModal();
          setIsLoggedIn(true);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleSignIn = ({ email, password }) => {
    auth
      .signIn({ email, password })
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        if (data.token) {
          return auth.checkToken(data.token);
        }
      })
      .then((res) => {
        const data = res.data;
        setCurrentUser(data);
        setToken(data.token);
        handleCloseModal();
        setNoAvatar(handleNoAvatar(data.name));
        setIsLoggedIn(true);
        history.push("/profile");
        console.log(isLoggedIn);
      })
      .catch((err) => console.log(err));
  };
  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setCurrentUser("");
    setIsLoggedIn(false);
    setToken("");
    history.push("/");
    // localStorage.clear();
    // setLoggedIn(false);
  };
  const handleEditProfile = ({ name, avatar }) => {
    api
      .updateUser(token, { name, avatar })
      .then(() => {
        handleCloseModal();
        setCurrentUser({ ...currentUser, name, avatar });
      })
      .catch((err) => console.log(err));
  };
  const handleNoAvatar = (name) => {
    const initial = name.slice(0, 1);
    return initial;
  };
  function handleAltClick() {
    if (activeModal === "signin") {
      handleCloseModal();
      handleRegisterModal();
    }
    if (activeModal === "signup") {
      handleCloseModal();
      handleLoginModal();
    }
  }

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = filterDataFromWeatherAPI(data);
        setTemp(temperature);
        const location = data.name;
        setLocation(location);
        api.getItems().then((items) => {
          setClothingItems(items);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth
        .checkToken(jwt)
        .then((res) => {
          setCurrentUser(res.data);
          setToken(jwt);
          setIsLoggedIn(true);
          setNoAvatar(handleNoAvatar(res.data.name));
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [token]);

  return (
    <div className="page__wrapper">
      <CurrentUserContext.Provider
        value={{ currentUser, isLoggedIn, noAvatar }}
      >
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            onAddButtonClick={handleCreateModal}
            onRegisterButton={handleRegisterModal}
            onLoginButton={handleLoginModal}
            currentLocation={location}
            isLoggedIn={isLoggedIn}
            currentUser={currentUser}
          />
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
              clothingItems={clothingItems}
              onCardLike={handleLikeClick}
            />
          </Route>
          <Route path="/create">
            <AddItemModal
              onClose={handleCloseModal}
              onAddItem={handleAddItemSubmit}
            />
          </Route>
          <Route path="/signin">
            <LoginModal
              onRegisterButton={handleRegisterModal}
              onClose={handleCloseModal}
              onSubmit={handleSignIn}
            />
          </Route>
          <ProtectedRoute path="/profile" isLoggedIn={isLoggedIn}>
            <Profile
              items={clothingItems}
              onSelectCard={handleSelectedCard}
              openModal={handleCreateModal}
              openSideEditModal={handleEditProfileModal}
              currentUser={currentUser}
              onSignout={handleSignOut}
              onCardLike={handleLikeClick}
              isLoggedIn={isLoggedIn}
            />
          </ProtectedRoute>
          <Footer />
          {activeModal === "create" && (
            <AddItemModal
              handleCloseModal={handleCloseModal}
              isOpen={handleCreateModal}
              onAddItem={handleAddItemSubmit}
              onSelectCard={handleSelectedCard}
              onClose={handleCloseModal}
              buttonText="Add garment"
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              name="itemPreview"
              selectedCard={selectedCard}
              onClose={handleCloseModal}
              onDelete={handleDeleteItem}
              currentUser={currentUser}
              token={token}
            />
          )}
          {activeModal === "signup" && (
            <RegisterModal
              isOpen={handleRegisterModal}
              onSignUp={handleSignUp}
              handleCloseModal={handleCloseModal}
              buttonText="Next"
              altButtonText="or Login"
              altClick={handleAltClick}
            />
          )}
          {activeModal === "signin" && (
            <LoginModal
              isOpen={handleLoginModal}
              onSignIn={handleSignIn}
              handleCloseModal={handleCloseModal}
              buttonText="Log In"
              altButtonText="or Register"
              altClick={handleAltClick}
            />
          )}
          {activeModal === "editprofile" && (
            <EditProfileModal
              isOpen={handleEditProfileModal}
              onEditProfile={handleEditProfile}
              handleCloseModal={handleCloseModal}
              buttonText="save"
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}
export default App;
