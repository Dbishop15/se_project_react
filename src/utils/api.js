import { baseUrl } from "./constants";

// GET https://localhost:3001/items
// POST https://localhost:3001/items
// DELETE https://localhost:3001/items/:id

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error${res.status}`);
}

export const getItems = () => {
  return fetch(`${baseUrl}/items`, {
    Headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};

export const addItems = ({ name, imageUrl, weather }) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    Headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then(checkResponse);
};

export const deleteItems = (card) => {
  return fetch(`${baseUrl}/items/${card}`, {
    method: "DELETE",
    Headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};

// export const deleteItems = (id) => {
//   return fetch(`${baseUrl}/items/${id}`, {
//     method: "DELETE",
//     Headers: {
//       "Content-Type": "application/json",
//     },
//   }).then(checkResponse);
// };
