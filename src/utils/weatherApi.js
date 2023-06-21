import { latitude, longitude, APIkey } from "./constants";

const getForecastWeather = () => {
  const weatherApi = fetch(
    ` https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
  console.log(weatherApi);
  return weatherApi;
};
// const filterDataFromWeatherAPI = (data) => {
//   const main = data.main;
//   const temperature = main && main.temp;
//   const weather = {
//     temperature: {
//       F: ` ${Math.round(temperature)}°F`,
//       C: ` ${Math.round(((temperature - 32) * 5) / 9)}°C`,
//     },
//   };
//   console.log(weather);
//   return weather;
// };

const filterDataFromWeatherAPI = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  return Math.ceil(temperature);
};
const temperature = (temp) => ({
  F: ` ${Math.round(temp)}°F`,
  C: ` ${Math.round(((temp - 32) * 5) / 9)}°C`,
});
export { getForecastWeather, filterDataFromWeatherAPI, temperature };
