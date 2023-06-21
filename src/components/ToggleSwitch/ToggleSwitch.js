import React, { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  // const [currentTemperatureUnit, handleToggleSwitchChange] = useState("C");

  // const handleChange = (e) => {
  //   if (currentTemperatureUnit === "C") handleToggleSwitchChange("F");
  //   if (currentTemperatureUnit === "F") handleToggleSwitchChange("C");
  // };
  // console.log(currentTemperatureUnit);

  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );
  // const isChecked = currentTemperatureUnit === "C";
  console.log(currentTemperatureUnit);

  return (
    <label className="switch">
      <input
        type="checkbox"
        className="switch__box"
        onClick={handleToggleSwitchChange}
      />
      <span
        className={
          currentTemperatureUnit === "F"
            ? "switch__slider switch__slider-F"
            : "switch__slider switch__slider-C"
        }
      ></span>
      <p
        className={`switch__temp-F ${
          currentTemperatureUnit === "F" && "switch__active"
        }`}
      >
        F
      </p>
      <p
        className={`switch__temp-C ${
          currentTemperatureUnit === "C" && "switch__active"
        }`}
      >
        C
      </p>
    </label>
  );
};
export default ToggleSwitch;
