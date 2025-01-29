import { addArtistToCollection } from "./crud.js";

// DOM references
const searchResultUlElem = document.querySelector(".search-result-list");

// BARA UNDER UTVECKLING -- TA BORT SEN!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let searchResultList = [];
// searchResultList = loadSearchListFromLS(SEARCH_KEY);
// renderSearchResults(searchResultList);

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
      addArtistToCollection(a.id);
    });
  });
}
