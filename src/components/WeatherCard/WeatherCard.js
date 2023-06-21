import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
// import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <section className="weather" id="weather">
      <div className="weather__temp">{weatherTemp}</div>
      <img src={imageSrcUrl} className="weather__image" alt="weather" />
    </section>
  );
};
export default WeatherCard;
