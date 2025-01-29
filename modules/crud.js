import {
  saveListToLS,
  ARTISTS_KEY,
  loadArtistsFromLS,
} from "./localStorage.js";
import { renderArtistCollection } from "./render.js";

let artistsList = [];
artistsList = loadArtistsFromLS(ARTISTS_KEY);

export function addArtistToCollection(id) {
  // Check if the artist already in the collection
  const artistAlreadyListed = artistsList.find(
    (listedArtist) => listedArtist.id === id
  );

  if (!artistAlreadyListed) {
    // Få med isFavourite propertyn på artistobjektet innan det sparas till listan och LS!!!!!!! = ska kunna markera artister man tycker om extra mycket med hjälp av en ikon t.ex ett hjärta. Alla ska ha ett outline hjärta men om isFavourite = true är hjärtat ifyllt

    // Add the artist object to the array and save to local storage
    artistsList.push(a);
    saveListToLS(ARTISTS_KEY, artistsList);
  } else {
    alert("Artist is already in your collection"); // IF TIME; FIX A POPUP OR MODAL INSTEAD
  }

  // Render updated artist-collection
  renderArtistCollection(artistsList);
}

export function deleteArtistFromCollection(id) {
  // Check if the artist already in the collection
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
