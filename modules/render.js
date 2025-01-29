import {
  addArtistToCollection,
  deleteArtistFromCollection,
  updateArtist,
} from "./crud.js";

// DOM references
const searchResultUlElem = document.querySelector(".search-result-list");
const musicContainerElem = document.getElementById("music-container");

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

    // Button to add the artist to your artist-collection
    const addBtnElem = document.createElement("button");
    addBtnElem.textContent = "Add";
    searchResultLiElem.appendChild(addBtnElem);

    // Eventlistener - add
    addBtnElem.addEventListener("click", () => {
      addArtistToCollection(a);
    });
  });
}

export function renderArtistCollection(array) {
  musicContainerElem.innerHTML = "";
  // Heading for the section
  const artistCollectionHeadingElem = document.createElement("h2");
  artistCollectionHeadingElem.textContent = "My Artist Collection";
  musicContainerElem.appendChild(artistCollectionHeadingElem);

  array.forEach((a) => {
    // Article
    const artistCardElem = document.createElement("article");
    artistCardElem.className = "artist-card";
    musicContainerElem.appendChild(artistCardElem);

    // Image
    const cardImgElem = document.createElement("img");
    cardImgElem.setAttribute("src", "./assets/lp-disc.jpg");
    cardImgElem.setAttribute("alt", "The image shows one half of an LP disc");
    artistCardElem.appendChild(cardImgElem);

    // Button with heart icon -- mark an artist as a favourite
    const favouriteBtnElem = document.createElement("button");
    artistCardElem.appendChild(favouriteBtnElem);

    favouriteBtnElem.innerHTML = a.isFavourite
      ? "<i class='fa-solid fa-heart'></i>"
      : "<i class='fa-regular fa-heart'></i>";

    // Eventlistener - update
    favouriteBtnElem.addEventListener("click", () => {
      updateArtist(a.id);
    });

    // Link -- artist name
    const artistLinkElem = document.createElement("a");
    artistLinkElem.textContent = a.name;
    artistLinkElem.setAttribute("href", "/about.html");
    artistLinkElem.setAttribute("target", "_blank");
    artistLinkElem.className = "artist-link";

    // Button to delete an artist
    const delBtnElem = document.createElement("button");
    delBtnElem.textContent = "Delete";
    artistCardElem.appendChild(delBtnElem);

    // Eventlistener - delete
    delBtnElem.addEventListener("click", () => {
      deleteArtistFromCollection(a.id);
    });

    artistCardElem.appendChild(artistLinkElem);
  });
}
