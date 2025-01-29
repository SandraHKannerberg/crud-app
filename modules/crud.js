import {
  saveListToLS,
  ARTISTS_KEY,
  loadArtistsFromLS,
} from "./localStorage.js";
import { renderArtistCollection } from "./render.js";

let artistsList = [];
artistsList = loadArtistsFromLS(ARTISTS_KEY);

// ADD ARTIST TO COLLECTION
export function addArtistToCollection(artist) {
  // Check if the artist already in the collection
  const artistAlreadyListed = artistsList.find(
    (listedArtist) => listedArtist.id === artist.id
  );

  if (!artistAlreadyListed) {
    // Add boolean isFavourite with default value false
    artist.isFavourite = false;

    // Add the artist object to the array and save to local storage
    artistsList.push(artist);
    saveListToLS(ARTISTS_KEY, artistsList);
    alert("Successfully added to the collection"); // IF TIME; FIX A POPUP OR MODAL INSTEAD
  } else {
    alert("Artist is already in your collection"); // IF TIME; FIX A POPUP OR MODAL INSTEAD
  }

  // Render updated artist-collection
  renderArtistCollection(artistsList);
}

// DELETE ARTIST FROM COLLECTION
export function deleteArtistFromCollection(id) {
  // Find the artist in the collection
  const artistToDelete = artistsList.find(
    (artistToDelete) => artistToDelete.id === id
  );

  if (!artistToDelete) {
    alert("Can't find the artist in the collection"); // IF TIME; FIX A POPUP OR MODAL INSTEAD
  } else {
    alert("Do you want to delete the artist from your collection"); // IF TIME; FIX A POPUP OR MODAL INSTEAD
    // Check the index
    const index = artistsList.indexOf(artistToDelete);

    // Remove that index from bucket list in local storage
    artistsList.splice(index, 1);

    // Save new list in local storage and render the updated list to the UI
    saveListToLS(ARTISTS_KEY, artistsList);

    // Render updated artist-collection
    renderArtistCollection(artistsList);
  }
}

// UPDATE ARTIST
export function updateArtist(id) {
  // Find the artist in the collection
  const artistToUpdate = artistsList.find(
    (artistToUpdate) => artistToUpdate.id === id
  );

  /// Find the index
  const index = artistsList.indexOf(artistToUpdate);

  // Change the boolean isFavourite
  artistToUpdate.isFavourite = !artistToUpdate.isFavourite;

  // // Update and save to local storage
  artistsList.splice(index, 1, artistToUpdate);
  saveListToLS(ARTISTS_KEY, artistsList);
}
