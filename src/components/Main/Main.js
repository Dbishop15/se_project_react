import React, { useMemo } from "react";
import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import { defaultClothingItems } from "../../utils/clothingItems";
import ItemCard from "../ItemCard/ItemCard";

function Main({ weatherTemp, onSelectCard }) {
  const weatherType = useMemo(() => {
    if (weatherTemp >= 76) {
      return "hot";
    } else if (weatherTemp >= 71 && weatherTemp <= 75) {
      return "warm";
    } else if (weatherTemp <= 70) {
      return "cold";
    }
  }, [weatherTemp]);

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={true} type="sunny" weatherTemp={weatherTemp} />
      <section className="main__cards" id="card-section">
        Today is {weatherTemp} °F / You may want to wear:
        <div className="main__items">
          {filteredCards.map((item) => (
            <ItemCard item={item} onSelectCard={onSelectCard} key={item._id} />
          ))}
        </div>
      </section>
    </main>
  );
}
export default Main;
