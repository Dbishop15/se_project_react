import "../blocks/WeatherCard.css";
import { weatherOptions } from "../utils/constants";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import React, { useContext } from "react";
import { temperature } from "../utils/weatherApi";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const imageSrc = weatherOptions.filter((item) => {
    return item.day === day && item.type === type;
  });

  const currentTemp = temperature(weatherTemp);
  const currentTempString = currentTemp[currentTemperatureUnit];

  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <section className="weather" id="weather">
      <div className="weather__temp">{currentTempString}</div>
      <img src={imageSrcUrl} className="weather__image" alt="weather" />
    </section>
  );
};

export default WeatherCard;
