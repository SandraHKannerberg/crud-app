// Import modules
import { fetchArtist } from "./modules/fetch.js";
// import {
//   saveListToLS,
//   ARTISTS_KEY,
//   artistsList,
//   SEARCH_KEY,
//   searchResultList,
//   loadListFromLS,
// } from "./modules/localStorage.js";

// DOM references
const formElem = document.getElementById("search-form");
const inputElem = document.getElementById("search-input");
// const musicContainerElem = document.getElementById("music-container");

// Eventlistener -- form-submit
formElem.addEventListener("submit", (event) => {
  event.preventDefault();

  // Input value from the user
  const query = inputElem.value.trim();
  fetchArtist(query);
});
