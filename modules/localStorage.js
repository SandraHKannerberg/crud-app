// Local storage keys
export const ARTISTS_KEY = "ARTISTS";

// Start with empty arrays
export let artistsList = [];

// Load from local storage
export function loadArtistsFromLS(ARTISTS_KEY) {
  const data = localStorage.getItem(ARTISTS_KEY);
  return (artistsList = data ? JSON.parse(data) : []);
}

// Save to local storage
export function saveListToLS(key, list) {
  localStorage.setItem(key, JSON.stringify(list));
}
