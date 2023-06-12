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
  }, [temp]);

  return (
    <div className="page__wrapper">
      <Header onCreateModal={handleCreateModal} currentLocation={location} />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
      {activeModal === "create" && (
        <ModalWithForm
          title="New garment"
          onClose={handleCloseModal}
          name="newGarment"
        />
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
