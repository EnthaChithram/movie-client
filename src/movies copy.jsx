import { useContext, useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";
import { Link } from "react-router-dom";
import { LoadingContext } from "./context/loadingContext";

const Movies = () => {
  // const { Data: movies, loading } = useFetch(
  //   import.meta.env.VITE_API_URL + "movies"
  // );
  const imdb = [{ id: "tt27540542" }, { id: "tt12735488" }, { id: "tt26655108" }]


  imdb.map((imdb) => (
    fetch("http://www.omdbapi.com/?i=" + imdb.id + "&apikey=23c91a2c").then((res) => {

      return res.json()
    }).then((data) => {
      imdb.poster = data.Poster
    })
  ))

  console.log(imdb)



  return (
    <div>
      <h2 className="text-red-500">movie list:</h2>
      {movies.map((movie) => (
        <div className="movieinfo" key={movie._id}>
          <Link to={"/movies/" + movie._id}>
            <div>{movie.name}</div>
            <div>{movie.year}</div>
            <div>{movie?.imdb}</div>
            <br></br>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Movies;
