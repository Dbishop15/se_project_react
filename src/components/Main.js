import React, { useContext } from "react";
import "../blocks/Main.css";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import { temperature } from "../utils/weatherApi";

function Main({ weatherTemp, onSelectCard, clothingItems, onCardLike }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const getWeatherType = () => {
    if (weatherTemp >= 76) {
      return "hot";
    } else if (weatherTemp >= 71 && weatherTemp <= 75) {
      return "warm";
    } else if (weatherTemp <= 70) {
      return "cold";
    }
  };

  const weatherType = getWeatherType();
  const currentTemp = temperature(weatherTemp);
  const currentTempString = currentTemp[currentTemperatureUnit];

  const filteredCards = clothingItems.filter((item) => {
    return item?.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={true} type="sunny" weatherTemp={weatherTemp} />
      <section className="main__cards" id="card-section">
        Today is {currentTempString}/ You may want to wear:
        <div className="main__items">
          {filteredCards.map((item) => (
            <ItemCard
              key={item._id || item.id}
              item={item}
              onSelectCard={onSelectCard}
              onCardLike={onCardLike}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
export default Main;
