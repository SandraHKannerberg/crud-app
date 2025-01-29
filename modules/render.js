import {
  saveListToLS,
  ARTISTS_KEY,
  // SEARCH_KEY,
  loadSearchListFromLS,
} from "./localStorage.js";

// DOM references
const searchResultUlElem = document.querySelector(".search-result-list");

// BARA UNDER UTVECKLING -- TA BORT SEN!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let searchResultList = [];
// searchResultList = loadSearchListFromLS(SEARCH_KEY);
// renderSearchResults(searchResultList);

let artistsList = [];
artistsList = loadSearchListFromLS(ARTISTS_KEY);

export function renderSearchResults(array) {
  array.forEach((a) => {
    // Each result become a listitem
    const searchResultLiElem = document.createElement("li");
    searchResultLiElem.className = "search-item";
    searchResultUlElem.appendChild(searchResultLiElem);

    // Artist name
    const impTextElem = document.createElement("strong");
    impTextElem.textContent = a.name;
    searchResultLiElem.appendChild(impTextElem);

    // Group or Person?
    const textElem = document.createElement("p");
    textElem.textContent = a.type;
    searchResultLiElem.appendChild(textElem);

    // SHOW OR NOT SHOW IN THE SEARCHLIST??
    // a.gender -- person
    // a.country -- person

    // Button to add the artist to your artist-collection
    const addBtnElem = document.createElement("button");
    addBtnElem.textContent = "Add";
    searchResultLiElem.appendChild(addBtnElem);

    // Eventlistener
    addBtnElem.addEventListener("click", () => {
      const id = a.id;

      // Check if the artist already in the collection
      const artistAlreadyListed = artistsList.find(
        (listedArtist) => listedArtist.id === id
      );

      if (!artistAlreadyListed) {
        // Add the artist object to the array and save to local storage
        artistsList.push(a);
        saveListToLS(ARTISTS_KEY, artistsList);
      } else {
        alert("Artist is already in your collection"); // IF TIME; FIX A POPUP OR MODAL INSTEAD
      }

      // Render artist-collection function here
    });
  });
}
