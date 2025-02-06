import { useContext, useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";
import { Link } from "react-router-dom";
import { LoadingContext } from "./context/loadingContext";
// import movies from "./manualData";
import { englishmovies } from "./englishmovies";

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


  const movies = englishmovies;

  return (
    <div className=" movies flex-col flex">
      {/* <h2 className="text-red-500 text-center ">2024</h2> */}
      <div className="mt-5 mb-20 mx-auto grid grid-cols-4 gap-x-12 gap-y-20 items-start ">
        {movies && movies.map((movie) => (
          <div className="bg-[#e5ebf4cc]  movieinfo rounded-2xl transition  duration-500 shadow-[0_2px_10px_rgba(0,0,0,0.8)] hover:shadow-[0_10px_40px_rgba(0,0,0,1)] hover:scale-103" key={movie.id}>
            <Link to={"/movies/" + movie.id}>

              <div className=" "><img src={movie.poster} alt={movie.title} className="h-[350px] w-[233px]  rounded-t-2xl" /></div>

              <div className="m-2  text-black">{movie.name}</div>
              <div className="m-2 text-black">{movie.year}</div>
              {/* <div>{movie?.id}</div> */}


            </Link>
          </div >
        ))}
      </div >
    </div >
  );
};

export default Movies;
