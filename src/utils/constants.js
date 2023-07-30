import daysunny from "../images/day/sunny.svg";
import daycloudy from "../images/day/cloudy.svg";
import dayfoggy from "../images/day/foggy.svg";
import dayrainy from "../images/day/rainy.svg";
import daysnowy from "../images/day/snowy.svg";
import daystormy from "../images/day/stormy.svg";
import moon from "../images/night/moon.svg";
import nightcloudy from "../images/night/cloudy.svg";
import nightfoggy from "../images/night/foggy.svg";
import nightrainy from "../images/night/rainy.svg";
import nightsnowy from "../images/night/snowy.svg";
import nightstormy from "../images/night/stormy.svg";

export const latitude = 18.796143;
export const longitude = 98.979263;
export const APIkey = "ccc7e93d53559c5e5c5236d8663137b2";
export const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});
export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://wtwr.twilightparadox.com"
    : "http://localhost:3001";

export const weatherOptions = [
  { url: daysunny, day: true, type: "sunny" },
  {
    url: daycloudy,
    day: true,
    type: "cloudy",
  },
  { url: dayfoggy, day: true, type: "foggy" },
  {
    url: dayrainy,
    day: true,
    type: "rainy",
  },
  { url: daysnowy, day: true, type: "snowy" },
  {
    url: daystormy,
    day: true,
    type: "stormy",
  },
  {
    url: moon,
    day: false,
    type: "moon",
  },
  {
    url: nightcloudy,
    day: false,
    type: "nightcloudy",
  },
  {
    url: nightfoggy,
    day: false,
    type: "nightfoggy",
  },
  {
    url: nightrainy,
    day: false,
    type: "nightrainy",
  },
  {
    url: nightsnowy,
    day: false,
    type: "nightsnowy",
  },
  {
    url: nightstormy,
    day: false,
    type: "nightstormy",
  },
];
