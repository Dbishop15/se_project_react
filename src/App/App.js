import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import ItemModal from "../components/ItemModal/ItemModal";
// import ModalWithForm from "../components/ModalWithForm/ModalWithForm";
import Profile from "../components/Profile/Profile";
import {
  filterDataFromWeatherAPI,
  getForecastWeather,
} from "../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddItemModal from "../components/AddItemModal/AddItemModal";
import * as api from "../utils/api";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

  const handleCreateModal = () => {
    setActiveModal("create");
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
    api
      .addItems({ name: name, imageUrl: imageUrl, weather: weather, id: 99 })
      .then((item) => {
        const card = { ...item, name, imageUrl, weather };
        setClothingItems([card, ...clothingItems]);
        handleCloseModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteItem = (deleteItem) => {
    console.log(deleteItem);
    api
      .deleteItems(deleteItem.id)
      .then(() => {
        const filteredCards = clothingItems.filter(
          (card) => deleteItem.id !== card.id
        );
        setClothingItems(filteredCards);
        handleCloseModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
          console.log(items);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <BrowserRouter>
      <div className="page__wrapper">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            onCreateModal={handleCreateModal}
            currentLocation={location}
          />
          <Switch>
            <Route exact path="/">
              <Main
                weatherTemp={temp}
                onSelectCard={handleSelectedCard}
                clothingItems={clothingItems}
                onDelete={handleDeleteItem}
              />
            </Route>
            <Route path="/profile">
              <Profile
                items={clothingItems}
                onSelectCard={handleSelectedCard}
                openModal={handleCreateModal}
              />
            </Route>
          </Switch>
          <Footer />
          {activeModal === "create" && (
            <AddItemModal
              handleCloseModal={handleCloseModal}
              isOpen={handleCreateModal}
              onAddItem={handleAddItemSubmit}
              onSelectCard={handleSelectedCard}
              onClose={handleCloseModal}
            />
          )}

          {activeModal === "preview" && (
            <ItemModal
              name="itemPreview"
              selectedCard={selectedCard}
              onClose={handleCloseModal}
              onDelete={handleDeleteItem}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </BrowserRouter>
  );
}
export default App;
