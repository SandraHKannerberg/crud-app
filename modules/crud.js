import {
  saveListToLS,
  ARTISTS_KEY,
  loadArtistsFromLS,
} from "./localStorage.js";
import { renderArtistCollection, renderArtistDetails } from "./render.js";

// DOM references
const searchResultUlElem = document.querySelector(".search-result-list");

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

    // Add boolean seenConcert with default value false
    artist.seenConcert = false;

    // Add the artist object to the array and save to local storage
    artistsList.push(artist);
    saveListToLS(ARTISTS_KEY, artistsList);
    alert(`Successfully added ${artist.name} to the collection`);
  } else {
    alert(`Artist ${artist.name} is already in your collection`);
  }

  // Render updated artist-collection
  renderArtistCollection(artistsList);

  searchResultUlElem.innerHTML = "";
}

// DELETE ARTIST FROM COLLECTION
export function deleteArtistFromCollection(id) {
  // Find the artist in the collection
  const artistToDelete = artistsList.find(
    (artistToDelete) => artistToDelete.id === id
  );

  if (!artistToDelete) {
    alert(`Can't find the artist ${artistToDelete.name} in the collection`);
  } else {
    alert(`Do you want to delete ${artistToDelete.name} from your collection?`);
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
// Toggle isFavourite
export function updateFavouriteArtist(id) {
  // Find the artist in the collection
  const artistToUpdate = artistsList.find(
    (artistToUpdate) => artistToUpdate.id === id
  );

  // Find the index
  const index = artistsList.indexOf(artistToUpdate);

  // Change the boolean isFavourite
  artistToUpdate.isFavourite = !artistToUpdate.isFavourite;

  // Update and save to local storage
  artistsList.splice(index, 1, artistToUpdate);
  saveListToLS(ARTISTS_KEY, artistsList);

  renderArtistCollection(artistsList);
}

// Toggle seenConcert
export function updateSeenArtistConcert(artist) {
  console.log(artist);

  // Change the boolean seenConcert
  artist.seenConcert = !artist.seenConcert;
  console.log(artist.seenConcert);

  // Find the index
  const index = artistsList.indexOf(artist);

  // Update and save to local storage
  artistsList.splice(index, 1, artist);
  saveListToLS(ARTISTS_KEY, artistsList);
}
