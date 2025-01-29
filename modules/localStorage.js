// Local storage keys
export const ARTISTS_KEY = "ARTISTS";
export const SEARCH_KEY = "SEARCH";

// Start with empty arrays
export let artistsList = [];
export let searchResultList = [];

// Load search from local storage -- BARA UNDER UTVECKLING _ TA BORT SEN!!!!!!!
export function loadSearchListFromLS(SEARCH_KEY) {
  const data = localStorage.getItem(SEARCH_KEY);
  return (searchResultList = data ? JSON.parse(data) : []);
}

// Load from local storage
export function loadArtistsFromLS(ARTISTS_KEY) {
  const data = localStorage.getItem(ARTISTS_KEY);
  return (artistsList = data ? JSON.parse(data) : []);
}

// Save to local storage
export function saveListToLS(key, list) {
  localStorage.setItem(key, JSON.stringify(list));
}
