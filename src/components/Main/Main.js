import React, { useContext } from "react";
import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
// import { defaultClothingItems } from "../../utils/clothingItems";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { temperature } from "../../utils/weatherApi";

function Main({ weatherTemp, onSelectCard, clothingItems, onDelete }) {
  // const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  // console.log(currentTemperatureUnit);
  // const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;
  // const weatherType = useMemo(() => {
  //   if (temp >= 76) {
  //     return "hot";
  //   } else if (temp >= 71 && temp <= 75) {
  //     return "warm";
  //   } else if (temp <= 70) {
  //     return "cold";
  //   }
  // }, [temp]);

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
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={true} type="sunny" weatherTemp={currentTempString} />
      <section className="main__cards" id="card-section">
        Today is {currentTempString}/ You may want to wear:
        <div className="main__items">
          {filteredCards.map((item) => (
            <ItemCard
              key={item?._id || item?.id}
              item={item}
              onSelectCard={onSelectCard}
              onDelete={onDelete}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
export default Main;
