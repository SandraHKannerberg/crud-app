// Import modules
import { fetchArtist } from "./modules/fetch.js";

// DOM references
const formElem = document.getElementById("search-form");
const inputElem = document.getElementById("search-input");
const musikContainerElem = document.getElementById("music-container");

// Eventlistener -- form-submit
formElem.addEventListener("submit", (event) => {
  event.preventDefault();

  // Input value from the user
  const query = inputElem.value.trim();
  fetchArtist(query);
});
