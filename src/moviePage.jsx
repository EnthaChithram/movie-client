import { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";
import { useParams, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import Commentsection from "./CommentSection/commentsection";
import { useCommentsContext } from "./hooks/useCommentsContext";
import movies from "./manualData";
import { englishmovies } from "./englishmovies";
import { NavContext } from "./context/navContext";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";


const Moviepage = () => {

  const API_KEY = "23c91a2c"; // Replace with your OMDb API key
  const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;


  const { id } = useParams();
  const { user } = useContext(AuthContext)
  const [movie, setMovie] = useState(null)
  const location = useLocation();
  const { setThh } = useContext(NavContext)
  // const [movie, setMovie] = useState(null);
  // const [comments, setComments] = useState(null)

  const { comments, dispatch } = useCommentsContext();




  const { Data, loading } = useFetch(import.meta.env.VITE_API_URL + "movies/" + id)





  useEffect(() => {
    setThh(null)
    if (Data) {
      const comments = Data;


      dispatch({ type: "set_comments", payload: comments });

    }
  }, [Data])

  useEffect(() => {
    const movieDetails = async () => {
      try {
        const res = await fetch(`${API_URL}&i=${id}`)
        const data = await res.json()

        console.log("ddd")

        if (data.Response = "True") {
          setMovie(data);

          console.log("dsff")
          console.log(movie)
          console.log(data)
        } else {
          setResults([]);
          console.log("nnnn")

        }
      } catch (error) {
        console.log("error catch", error)

      }
    }

    if (movie === null) {
      movieDetails()
    }



  })






  return (
    <div className="flex flex-col items-center mb-20">
      {/* {movie && movie.vposter && <img src={movie.hposter} width="100%" height="300px" />} */}
      <div
        className=" flex justify-between w-[58%]"

      >
        <div className="flex flex-col justify-between space-y-1 pr-5 text-gray-400">

          <div>
            <motion.h1
              className="text-5xl moviepage text-white "
              initial={{ opacity: 0, }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >

              {movie ? movie?.Title : <div className="animate-pulse h-7 w-65 rounded bg-gray-400"></div>}
            </motion.h1>

            <motion.h4
              className="moviepage mb-5 text-white mt-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.2, ease: "easeOut" }}
            >
              {movie ? movie.Year : <div className="animate-pulse h-3 w-10 rounded bg-gray-400"></div>}
            </motion.h4>
          </div>


          <div className={`flex flex-col ${movie ? "space-y-1.5" : "space-y-4"}`}>

            <div className="normaltext">
              {movie ?
                <> <b className="text-white"> Director: </b>
                  {movie?.Director} </> :

                <div className="animate-pulse h-5 w-50 rounded bg-gray-700"></div>}
            </div>

            <div className="normaltext">
              {movie ? <><b className="text-white">Cast: </b>
                {movie?.Actors}</>

                : <div className="animate-pulse h-5 w-70 rounded bg-gray-700"></div>
              }

            </div>

            <div className="font-bold normaltext text-gray-400">

              {movie ? <><b className="text-white">Description: </b>
                {movie?.Plot}</>

                : <div className="animate-pulse h-10 w-120 rounded bg-gray-700"></div>
              }

            </div>

          </div>

        </div>

        <div className="  min-w-[170px]">
          <div className=" ">
            <img className={`h-[200px] w-[133px] ${!movie ? "animate-pulse bg-gray-800 " : ""} rounded-md shadow-black shadow-xl md:h-[250px] md:w-[166.4px] `} src={movie?.Poster} alt={movie?.Title} />
          </div>
        </div>

      </div>


      {comments && movie && (
        <Commentsection



          movie={movie}
          loading={loading}
          selected="678ab7100ffa713184930be2"
        />
      )}
    </div>
  );
};


export default Moviepage;
