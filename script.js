// Import modules
import { fetchSearchResults } from "./modules/fetch.js";

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
const artistInputElem = document.getElementById("artist-input");
const typeSelectElem = document.getElementById("type");
const limitInputElem = document.getElementById("search-limit");

// const musicContainerElem = document.getElementById("music-container");

// Eventlistener -- form-submit
formElem.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Input value from the user
  const query = artistInputElem.value.trim();
  const type = typeSelectElem.value;
  const limit = limitInputElem.value || 10;

  const inputData = {
    query: query,
    type: type,
    limit: limit,
  };

  await fetchSearchResults("artist", inputData);

  artistInputElem.value = "";
  typeSelectElem.value = "";
  limitInputElem.value = "";
});
