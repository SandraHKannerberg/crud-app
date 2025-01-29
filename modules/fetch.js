// import {
//   saveListToLS,
//   SEARCH_KEY,
//   searchResultList,
//   ARTISTS_KEY,
// } from "./localStorage.js";

import { renderSearchResults } from "./render.js";

// API base url
const baseURL = "https://musicbrainz.org/ws/2/";

// CATCH THE SEARCH QUERY AND RENDER THE RESULTS TO THE UI
export async function fetchArtist(query) {
  try {
    const response = await fetch(
      baseURL + "artist?query=" + query + "&limit=5",
      {
        headers: { Accept: "application/json" },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error, status code: ${response.status}`);
    }

    const artistData = await response.json();
    const searchResults = artistData.artists;

    // SAVE OR NOT SAVE TO LS??
    // searchResultList.push(searchResults);
    // saveListToLS(SEARCH_KEY, searchResults);

    renderSearchResults(searchResults);
  } catch (error) {
    console.error("An error occurred");
  }
}
