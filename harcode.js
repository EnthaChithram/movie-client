import fs from "fs";
import fetch from "node-fetch"; // Remove this line if using Node.js 18+

const movies = [
  { id: "tt27540542" },
  { id: "tt12735488" },
  { id: "tt26655108" },
  { id: "tt14564000" },
  { id: "tt16539454" },
  { id: "tt15433956" },
  { id: "tt11821912" },
  { id: "tt26903104" },
  { id: "tt28282872" },
  { id: "tt28074691" },
  { id: "tt27611340" },
  { id: "tt27191250" },
  { id: "tt22987820" },
  { id: "tt27757690" },
  { id: "tt28351127" },
  { id: "tt33496202" },
  { id: "tt28258888" },
  { id: "tt29959142" },
  { id: "tt32887285" },
  { id: "tt33291871" },
];

const english = [
  {id:  "tt11280740" }, // severance
  { id: "tt0407887" }, // The Departed (2006)
  { id: "tt0482571" }, // The Prestige (2006)
 
  { id: "tt1022603" }, // 500 days (2023)
 { id: "tt0110912" }, // Pulp Fiction (1994)
  { id: "tt0137523" }, // Fight Club (1999)
  { id: "tt0468569" }, // The Dark Knight (2008)
  { id: "tt0816692" }, // Interstellar (2014)
  
  

  { id: "tt1853728" }, // Django
  
  
];

const API_KEY = "23c91a2c"; // Replace with your OMDb API key
const API_URL = "http://www.omdbapi.com/?i=";

const fetchMovies = async () => {
  const updatedMovies = await Promise.all(
    english.map(async (movie) => {
      const res = await fetch(
        `${API_URL}${movie.id}&apikey=${API_KEY}&plot=short`
      );
      const data = await res.json();

      return {
        id: movie.id,
        name: data.Title,
        year: data.Year,
        poster: data.Poster,
        plot: data.Plot, // short description
        director: data.Director,
        cast: data.Actors,
      };
    })
  );

  // Save to movies.json
  fs.writeFileSync(
    "./src/englishmovies.json",
    JSON.stringify(updatedMovies, null, 2)
  );

  console.log("✅ Movie data saved to src/movies.json");
};

fetchMovies();
