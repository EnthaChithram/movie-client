import { useContext, useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";
import { Link } from "react-router-dom";
import { LoadingContext } from "./context/loadingContext";
// import movies from "./manualData";
import { englishmovies } from "./englishmovies";
import { delay, motion, spring } from "framer-motion";



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
    <motion.div
      initial={{ y: 90 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, type: spring, bounce: 0.3 }}
      className=" movies flex-col flex">
      {/* <h2 className="text-red-500 text-center ">2024</h2> */}
      <div className="mx-auto grid items-start mt-10 mb-20 grid-cols-2 gap-x1 md:grid-cols-4 gap-x-12 gap-y-20  ">
        {movies && movies.map((movie) => (
          <motion.div
            className=" bg-[#1a2436]  movieinfo rounded-2xl transition  duration-500 shadow-[0_2px_10px_rgba(0,0,0,0.8)] hover:shadow-[0_10px_40px_rgba(0,0,0,1)] hover:scale-103" key={movie.id}>
            <Link to={"/movies/" + movie.id}>

              <div className=" "><img src={movie.poster} alt={movie.title} className="h-[200px] w-[133px]  md:h-[350px] md:w-[233px]  rounded-t-2xl" /></div>

              <div className="my-1 mx-2 md:m-2 text-[#e5e7eb]  text-sm md:text-base">{movie.name}</div>
              <div className="my-1 mx-2 md:m-2 text-[#9ca3af] text-xs md:text-sm">{movie.year}</div>
              {/* <div>{movie?.id}</div> */}


            </Link>
          </motion.div >
        ))}
      </div >
    </motion.div >
  );
};

export default Movies;
