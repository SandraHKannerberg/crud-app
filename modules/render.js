import {
  addArtistToCollection,
  deleteArtistFromCollection,
  updateArtist,
} from "./crud.js";

import { capitalizeFirstLetter } from "./utilities.js";

// DOM references
const searchResultUlElem = document.querySelector(".search-result-list");
const musicContainerElem = document.getElementById("music-container");
const artistDetailsContainer = document.getElementById(
  "artist-details-container"
);
const artistInfoHeaderElem = document.querySelector(".artist-details-header");
const artistInfoAsideElem = document.querySelector(".artist-info-container");

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
    addBtnElem.className = "add-btn";
    addBtnElem.textContent = "Add";
    searchResultLiElem.appendChild(addBtnElem);

    // Eventlistener -- add
    addBtnElem.addEventListener("click", () => {
      addArtistToCollection(a);
    });
  });
}

export function renderArtistCollection(array) {
  musicContainerElem.innerHTML = "";
  // Heading for the section
  const collectionTextDivElem = document.createElement("div");
  collectionTextDivElem.className = "collection-container";
  musicContainerElem.appendChild(collectionTextDivElem);

  const artistCollectionHeadingElem = document.createElement("h2");
  artistCollectionHeadingElem.className = "collection-heading";

  artistCollectionHeadingElem.textContent = "Artist Collection * ".repeat(20);
  collectionTextDivElem.appendChild(artistCollectionHeadingElem);

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

    // H3 and Link -- artist name
    const artistNameElem = document.createElement("h3");
    artistNameElem.className = "artist-name";
    artistCardElem.appendChild(artistNameElem);

    const artistLinkElem = document.createElement("a");
    artistLinkElem.textContent = a.name;
    artistLinkElem.setAttribute("href", `details.html?id=${a.id}`);
    artistLinkElem.setAttribute("target", "_blank");
    artistLinkElem.className = "artist-link";
    artistNameElem.appendChild(artistLinkElem);

    // Button with heart icon -- mark an artist as a favourite
    const favouriteBtnElem = document.createElement("button");
    favouriteBtnElem.className = "favourite-btn";
    artistCardElem.appendChild(favouriteBtnElem);

    // Förbättra denna, måste uppdatera sidan för att ändringen ska synas!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    favouriteBtnElem.innerHTML = a.isFavourite
      ? "<i class='fa-solid fa-heart'></i>"
      : "<i class='fa-regular fa-heart'></i>";

    // Eventlistener -- update
    favouriteBtnElem.addEventListener("click", () => {
      updateArtist(a.id);
    });

    // Button to delete an artist
    const delBtnElem = document.createElement("button");
    delBtnElem.innerHTML = "<i class='fa-solid fa-xmark'></i>";
    delBtnElem.className = "del-btn";
    artistCardElem.appendChild(delBtnElem);

    // Eventlistener -- delete
    delBtnElem.addEventListener("click", () => {
      deleteArtistFromCollection(a.id);
    });
  });
}

export function renderArtistDetails(artist) {
  // HEADER -INFO
  // Name
  const artistName = document.createElement("h1");
  artistName.className = "artist-name";
  artistName.textContent = `* ${artist.name}`;
  artistInfoHeaderElem.appendChild(artistName);

  // ASIDE - INFO ------------------------------------------------------------------------
  // Type
  const artistInfoType = document.createElement("p");
  artistInfoType.className = "artist-info";
  artistInfoType.textContent =
    `Type ~ ${artist.type}` +
    " " +
    capitalizeFirstLetter(artist.disambiguation);
  artistInfoAsideElem.appendChild(artistInfoType);

  // Gender
  const artistInfoGender = document.createElement("p");
  artistInfoGender.className = "artist-info";
  artistInfoGender.textContent =
    "Gender ~" + " " + capitalizeFirstLetter(artist.gender);
  artistInfoAsideElem.appendChild(artistInfoGender);

  // Born - Startdate
  const artistInfoBorn = document.createElement("p");
  artistInfoBorn.className = "artist-info";
  artistInfoBorn.textContent = `Born ~ ${artist["life-span"].begin}`;
  artistInfoAsideElem.appendChild(artistInfoBorn);

  // Area (country)
  const artistInfoArea = document.createElement("p");
  artistInfoArea.className = "artist-info";
  artistInfoArea.textContent = `Area ~ ${artist.area.name}, ${artist.country}`;
  artistInfoAsideElem.appendChild(artistInfoArea);

  // // Genre-list KOLLA UPP HUR MAN FILTRERAR BORT TAGS SOM FAKTISKT INTE ÄR GENRE!!!!!!!!
  // const artistInfoGenreList = document.createElement("ul");
  // artistInfoGenreList.className = "artist-genre-list";
  // artistInfoAsideElem.appendChild(artistInfoGenreList);

  // const artistInfoListTitle = document.createElement("p");
  // artistInfoListTitle.className = "artist-info-list-title";
  // artistInfoListTitle.textContent = "Genre ~";
  // artistInfoGenreList.appendChild(artistInfoListTitle);

  // // Tags, genre
  // artist.tags.forEach((tag) => {
  //   const artistInfoGenreItem = document.createElement("li");
  //   artistInfoGenreItem.className = "artist-genre-listitem";
  //   artistInfoGenreItem.textContent = capitalizeFirstLetter(tag.name);
  //   artistInfoGenreList.appendChild(artistInfoGenreItem);
  // });
}
