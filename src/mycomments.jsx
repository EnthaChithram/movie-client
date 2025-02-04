import { Link, useParams } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import { Loading } from "./loading";
import movies from "./manualData";

export const MyComments = () => {
  const { user } = useContext(AuthContext);
  const [movie, setMovie] = useState([])

  const {
    Data = {},
    loading,
    error,
  } = useFetch(
    user ? import.meta.env.VITE_API_URL + "user/" + user.userid : null
  );

  if (!user) {
    return (
      <>
        <Loading></Loading>
        <h1>pleaselog in to load your comments</h1>
      </>
    );
  }

  const { user: userdata = {}, comments = [] } = Data;

  return (
    <div>
      {loading ? <h1>loading...</h1> : <h1 className="font-bold underline">My comments:</h1>}

      {comments.map((comment) => (

        <Link
          key={comment._id}
          style={{ textDecoration: "none", }}
          to={"/movies/" + comment.movieid}
        >
          <div className="flex flexcol">

            <h3 className="font-bold">{comment.parentid ? "You replied:" : "You commented:"} <p className="font-normal">{comment.text}</p></h3>

          </div>
          <br></br>
        </Link>

      ))}
    </div>
  );
};
