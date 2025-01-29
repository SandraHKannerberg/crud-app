const searchResultUlElem = document.querySelector(".search-result-list");

export function renderSearchResults(array) {
  array.forEach((a) => {
    // Each result become a listitem
    const searchResultLiElem = document.createElement("li");
    searchResultLiElem.className = "search-item";
    searchResultUlElem.appendChild(searchResultLiElem);

    // Artist name
    const impTextElem = document.createElement("strong");
    impTextElem.textContent = a.name;
    searchResultLiElem.appendChild(impTextElem);

    // Group or Person?
    const textElem = document.createElement("p");
    textElem.textContent = a.type;
    searchResultLiElem.appendChild(textElem);

    // SHOW OR NOT SHOW IN THE SEARCHLIST??
    // a.aliases.name -- grupp
    // a.gender -- person
    // a.country -- person

    // Button to add the artist to your artist-collection
    const addBtnElem = document.createElement("button");
    addBtnElem.textContent = "Add";
    searchResultLiElem.appendChild(addBtnElem);
  });
}
