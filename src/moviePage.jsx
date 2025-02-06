import { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";
import { useParams, useLocation } from "react-router-dom";

import Commentsection from "./CommentSection/commentsection";
import { useCommentsContext } from "./hooks/useCommentsContext";
import movies from "./manualData";
import { englishmovies } from "./englishmovies";

const Moviepage = () => {
  const { id } = useParams();
  const movie = englishmovies.find((m) => m.id === id) || { name: "movie not found" }
  const location = useLocation();
  // const [movie, setMovie] = useState(null);
  // const [comments, setComments] = useState(null)

  const { comments, dispatch } = useCommentsContext();

  const { Data, loading } = useFetch(
    import.meta.env.VITE_API_URL + "movies/" + id
  );



  useEffect(() => {
    if (Data) {
      const comments = Data;


      dispatch({ type: "set_comments", payload: comments });

    }
  }, [Data])






  return (
    <>
      {/* {movie && movie.vposter && <img src={movie.hposter} width="100%" height="300px" />} */}
      <div
        className="moviepage"
        style={{
          maxWidth: "700px",
          margin: "30px auto",
          textAlign: "center",
        }}
      >

        <h1 className=" text-9xl">{movie.name}</h1>
        <h4>{movie.year}</h4>



      </div>

      {comments && movie && (
        <Commentsection

          movie={movie}
          loading={loading}
          selected="678ab7100ffa713184930be2"
        />
      )}
    </>
  );
};


export default Moviepage;
