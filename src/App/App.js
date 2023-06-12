import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import ItemModal from "../components/ItemModal/ItemModal";
import ModalWithForm from "../components/ModalWithForm/ModalWithForm";
import "./App.css";
import { getForecastWeather } from "../utils/weatherApi";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("");

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

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const main = data.main;
        const temperature = main && main.temp;
        const temp = Math.ceil(temperature);
        setTemp(temp);

        const location = data.name;
        setLocation(location);
      })
      .catch((err) => {
        console.log(`An error has occurred ${err}`);
      });
  }, []);

  return (
    <div className="page__wrapper">
      <Header onCreateModal={handleCreateModal} currentLocation={location} />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
      {activeModal === "create" && (
        <ModalWithForm
          title="New garment"
          onClose={handleCloseModal}
          name="newGarment"
        >
          <label className="modal__label">Name</label>
          <input
            type="text"
            name="name"
            id="place-name"
            className="modal__input modal__input_type_card-name"
            placeholder="Name"
            minLength="1"
            maxLength="30"
            required
          />
          <span className="modal__error" id="place-name-error"></span>

          <label className="modal__label">Image</label>
          <input
            type="url"
            name="link"
            id="place-link"
            className="modal__input modal__input_type_card-link"
            placeholder="Image URL"
            required
          />
          <span className="modal__error" id="place-link-error"></span>
          <p className="modal__subtitle">Select the weather tyep:</p>
          <div className="modal__input modal__input_type_radio">
            <div>
              <input type="radio" id="hot" name="weatherType" value="hot" />
              <label className="modal__label_radio" htmlFor="hot">
                Hot
              </label>
            </div>
          </div>
          <div className="modal__input modal__input_type_radio">
            <div>
              <input type="radio" id="warm" name="weatherType" value="warm" />
              <label className="modal__label_radio" htmlFor="warm">
                Warm
              </label>
            </div>
          </div>
          <div className="modal__input modal__input_type_radio">
            <div>
              <input type="radio" id="cold" name="weatherType" value="cold" />
              <label className="modal__label_radio" htmlFor="cold">
                Cold
              </label>
            </div>
          </div>
        </ModalWithForm>
      )}

      {activeModal === "preview" && (
        <ItemModal
          selectedCard={selectedCard}
          onClose={handleCloseModal}
          name="itemPreview"
        />
      )}
      <Footer />
    </div>
  );
}
export default App;
