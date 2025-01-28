import { useContext, useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";
import { Link } from "react-router-dom";
import { LoadingContext } from "./context/loadingContext";

const Movies = () => {
  const { isloading, setIsloading } = useContext(LoadingContext);

  const { Data: movies, loading } = useFetch(
    import.meta.env.VITE_API_URL + "movies"
  );
  console.log("from movies", loading);
  setIsloading(loading);

  return (
    <div>
      <h2 className="text-red-500">movie list:</h2>
      {movies.map((movie) => (
        <div className="movieinfo" key={movie._id}>
          <Link to={"/movies/" + movie._id}>
            <div>{movie.name}</div>
            <div>{movie.year}</div>
            <br></br>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Movies;
