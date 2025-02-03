import { fetchDetails } from "./modules/fetch.js";

function init() {
  fetchDetails();
}

document.addEventListener("DOMContentLoaded", init);
