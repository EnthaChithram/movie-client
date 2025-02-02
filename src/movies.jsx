import { useContext, useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";
import { Link } from "react-router-dom";
import { LoadingContext } from "./context/loadingContext";
import movies from "./manualData";

const Movies = () => {
  // const { Data: movies, loading } = useFetch(
  //   import.meta.env.VITE_API_URL + "movies"
  // );
  // const [movies, setmovies] = useState([
  //   { id: "tt27540542", name: "m" },
  //   { id: "tt12735488", name: "" },
  //   { id: "tt26655108", name: null },
  //   { id: "tt14564000", name: null },
  // ]);

  // useEffect(() => {

  //   const updated=
  //   movies.map((movie) =>
  //     fetch("http://www.omdbapi.com/?i=" + movie.id + "&apikey=23c91a2c")
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         movie.name = data.Title;
  //         movie.year = data.Year;
  //         movie.poster = data.Poster;
  //       }))
  // }, [])




  return (
    <div>
      <h2 className="text-red-500">movie list:</h2>
      {movies && movies.map((movie) => (
        <div className="movieinfo" key={movie.id}>
          <Link to={"/movies/" + movie.id}>
            <div>{movie.name}</div>
            <div>{movie.year}</div>
            <div>{movie?.id}</div>
            <img src={movie.poster} alt={movie.title} width="300" />
            <br></br>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Movies;
