// Local storage keys
export const ARTISTS_KEY = "ARTISTS";
export const SEARCH_KEY = "SEARCH";

// Start with empty arrays
export let artistsList = [];
export let searchResultList = [];

// Load from local storage
export function loadListFromLS(key) {
  const data = localStorage.getItem(key);
  return (list = data ? JSON.parse(data) : []);
}

// Save to local storage
export function saveListToLS(key, list) {
  localStorage.setItem(key, JSON.stringify(list));
}
