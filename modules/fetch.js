import { artistsList, saveListToLS, ARTISTS_KEY } from "./localStorage.js";

const baseURL = "https://musicbrainz.org/ws/2/";

export async function fetchArtist(query) {
  try {
    const response = await fetch(
      baseURL + "artist?query=" + query + "&fmt=json"
    );
    if (!response.ok) {
      throw new Error(`HTTP error, status code: ${response.status}`);
    }

    const artistData = await response.json();

    // const newArtist = {
    //   id: artistData.artists.id,
    //   name: artistData.artists.name,
    // };

    // SPARA HELA OBJEKTET NU UNDER UTVECKLINGEN, MEN ANPASSA SEDAN VAD SOM SPARAS - SE OVAN NEW ARTIST
    artistsList.push(artistData.artists[0]);
    console.log(artistsList);
    saveListToLS(ARTISTS_KEY, artistsList);
  } catch (error) {
    console.error("An error occurred");
  }
}
