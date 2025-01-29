import {
  saveListToLS,
  ARTISTS_KEY,
  loadSearchListFromLS,
} from "./localStorage.js";

let artistsList = [];
artistsList = loadSearchListFromLS(ARTISTS_KEY);

export function addArtistToCollection(id) {
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
}
