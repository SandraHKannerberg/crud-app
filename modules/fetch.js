import { renderArtistDetails, renderSearchResults } from "./render.js";
import { ARTISTS_KEY, loadArtistsFromLS } from "./localStorage.js";

// API base url
const baseURL = "https://musicbrainz.org/ws/2/";

export async function fetchSearchResults(resource, query = {}) {
  // Customise the query format
  if (query.query) {
    query.query = `artist:${query.query} AND type:${query.type}`;
    delete query.type; // Remove 'type' since it's now part of 'query' in the API
  }

  const params = new URLSearchParams(query).toString();

  try {
    const response = await fetch(`${baseURL}${resource}?${params}`, {
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error with status code: ${response.status}`);
    }
    const artistData = await response.json();
    const searchResults = artistData.artists;

    // Render the searchresults to the UI
    renderSearchResults(searchResults);
  } catch (error) {
    console.error(error);
  }
}

// FETCH FROM THE LIST IN LOCAL STORAGE
export function fetchDetails() {
  const urlParams = new URLSearchParams(document.location.search);
  const artistId = urlParams.get("id");

  if (artistId) {
    const artists = loadArtistsFromLS(ARTISTS_KEY);
    const artist = artists.find((a) => a.id == artistId);

    if (artist) {
      renderArtistDetails(artist);
    } else {
      alert("Something went wrong - Artist not found");
    }
  }
}
