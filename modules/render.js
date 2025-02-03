import {
  addArtistToCollection,
  deleteArtistFromCollection,
  updateArtist,
} from "./crud.js";

import { capitalizeFirstLetter } from "./utilities.js";

// DOM references
const searchResultUlElem = document.querySelector(".search-result-list");
const musicContainerElem = document.getElementById("music-container");
const artistInfoHeaderElem = document.querySelector(".artist-details-header");
const artistInfoAsideElem = document.querySelector(".artist-info-container");
// BEHÖVS NÄR JAG FÅR IN MER DETALJER OM ARTISTEN
// const artistDetailsContainer = document.getElementById(
//   "artist-details-container"
// );

// FUNCTION TO RENDER THE SEARCH RESULTS
export function renderSearchResults(array) {
  searchResultUlElem.innerHTML = "";
  const searchResultTitle = document.createElement("strong");
  searchResultTitle.textContent = "Search-result:";
  searchResultUlElem.appendChild(searchResultTitle);

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
    addBtnElem.className = "btn add-btn";
    addBtnElem.textContent = "Add";
    searchResultLiElem.appendChild(addBtnElem);

    addBtnElem.addEventListener("click", () => {
      addArtistToCollection(a);
    });
  });
}

// RENDER YOUR ARTIST COLLECTION
export function renderArtistCollection(array) {
  musicContainerElem.innerHTML = "";
  // Heading for the section with css animation
  const headingContainerElem = document.createElement("div"); // Needed for the animation
  headingContainerElem.className = "heading-container";
  musicContainerElem.appendChild(headingContainerElem);

  const animatedHeadingElem = document.createElement("h2");
  animatedHeadingElem.className = "animated-heading";

  animatedHeadingElem.textContent = "Artist Collection * ".repeat(20); // Needed for the animation
  headingContainerElem.appendChild(animatedHeadingElem);

  array.forEach((a) => {
    // Artist-card
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
    // Trigger the update function
    const favouriteBtnElem = document.createElement("button");
    favouriteBtnElem.className = "icon-btn favourite-btn";
    artistCardElem.appendChild(favouriteBtnElem);

    favouriteBtnElem.innerHTML = a.isFavourite
      ? "<i class='fa-solid fa-heart'></i>"
      : "<i class='fa-regular fa-heart'></i>";

    favouriteBtnElem.addEventListener("click", () => {
      updateArtist(a.id);
    });

    // Button to delete an artist by id
    const delBtnElem = document.createElement("button");
    delBtnElem.innerHTML = "<i class='fa-solid fa-xmark'></i>";
    delBtnElem.className = "icon-btn del-btn";
    artistCardElem.appendChild(delBtnElem);

    delBtnElem.addEventListener("click", () => {
      deleteArtistFromCollection(a.id, a.name);
    });
  });
}

// RENDER ARTIST DETAILS
export function renderArtistDetails(artist) {
  // HEADER -INFO
  // Name
  const artistName = document.createElement("h1");
  artistName.className = "artist-name";
  artistName.textContent = `* ${artist.name}`;
  artistInfoHeaderElem.appendChild(artistName);

  // ASIDE - INFO
  // Type
  const artistInfoType = document.createElement("p");
  artistInfoType.className = "artist-info";
  artistInfoType.textContent =
    `Type ~ ${artist.type},` +
    " " +
    capitalizeFirstLetter(artist.disambiguation);
  artistInfoAsideElem.appendChild(artistInfoType);

  // Gender
  if (artist.type === "Person") {
    const artistInfoGender = document.createElement("p");
    artistInfoGender.className = "artist-info";
    artistInfoGender.textContent =
      "Gender ~" + " " + capitalizeFirstLetter(artist.gender);
    artistInfoAsideElem.appendChild(artistInfoGender);
  }

  // Born / Startdate
  if (artist.type === "Person") {
    const artistInfoBorn = document.createElement("p");
    artistInfoBorn.className = "artist-info";
    artistInfoBorn.textContent = `Born ~ ${artist["life-span"].begin}`;
    artistInfoAsideElem.appendChild(artistInfoBorn);
  } else {
    const artistInfoBorn = document.createElement("p");
    artistInfoBorn.className = "artist-info";
    artistInfoBorn.textContent = `Startdate ~ ${artist["life-span"].begin}`;
    artistInfoAsideElem.appendChild(artistInfoBorn);
  }

  // Area (country)
  const artistInfoArea = document.createElement("p");
  artistInfoArea.className = "artist-info";
  artistInfoArea.textContent = `Area ~ ${artist.area.name}, ${artist.country}`;
  artistInfoAsideElem.appendChild(artistInfoArea);
}
