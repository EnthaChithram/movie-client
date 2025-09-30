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
  const { id } = useParams();
  const { user } = useContext(AuthContext)
  const movie = englishmovies.find((m) => m.id === id) || { name: "movie not found" }
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






  return (
    <div className="flex flex-col items-center mb-20">
      {/* {movie && movie.vposter && <img src={movie.hposter} width="100%" height="300px" />} */}
      <div
        className=" flex justify-between w-[58%]"

      >
        <div className="flex flex-col space-y-1 pr-5 text-gray-400">
          <motion.h1
            className="text-5xl moviepage text-white"
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {movie.name}
          </motion.h1>
          <motion.h4
            className="moviepage mb-5 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            {movie.year}
          </motion.h4>
          <div className="normaltext">
            <b className="text-white"> Director: </b>
            {movie.director}
          </div>

          <div className="normaltext">
            <b className="text-white">Cast: </b>
            {movie.cast}
          </div>

          <div className="font-bold normaltext text-gray-400">
            <b className="text-white">Description: </b>
            {movie.plot}
          </div>
        </div>

        <div className="  min-w-[170px]">
          <div className=" ">
            <img className="h-[200px] w-[133px] rounded-md shadow-black shadow-xl md:h-[250px] md:w-[166.4px] " src={movie.poster} alt={movie.title} />
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
