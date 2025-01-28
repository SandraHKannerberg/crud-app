// Local storage keys
export const ARTISTS_KEY = "ARTISTS";

// Start with empty arrays
export let artistsList = [];

// Load from local storage
export function loadListFromLS(key) {
  const data = localStorage.getItem(key);
  return (listName = data ? JSON.parse(data) : []);
}

// Save to local storage
export function saveListToLS(key, listName) {
  localStorage.setItem(key, JSON.stringify(listName));
}
