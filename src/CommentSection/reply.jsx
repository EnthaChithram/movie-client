import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { commentsContext } from "../context/commentscontext";

const Reply = ({ movie, comment }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [parentid, setParentid] = useState(comment._id);
  const [movieid, setMovieid] = useState(movie.id);
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(false);
  // const [cc, setcc] = useState(null);

  const { user } = useContext(AuthContext);
  const { cc, dispatch, isReplying } = useContext(commentsContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      setLoading(true)
      const newComment = { text, parentid, movieid };

      const response = await fetch(import.meta.env.VITE_API_URL + "newcommentu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ` + user.token,
        },
        body: JSON.stringify(newComment),
      });

      const json = await response.json();
      dispatch({ type: "create_comment", payload: json });
      dispatch({ type: "updatecc", payload: null })
      dispatch({ type: "reply_off" });
      setText("")


      setLoading(false)
    }
    else {
      navigate("/signup")
    }
  }



  const handleReply = (id) => {

    if (cc === id) {
      dispatch({ type: isReplying ? "reply_off" : "reply_on" });
      dispatch({ type: "updatecc", payload: null })
    } else {
      dispatch({ type: "reply_off" });
      dispatch({ type: "updatecc", payload: id })
      dispatch({ type: "reply_on" });
    }
  };


  return (
    <div >
      <div className="flex ">
        <div className="pl-2">[Likes]{"  "}</div>
        <button className="cursor-pointer pl-2"
          onClick={() => {
            handleReply(comment._id);
          }}
        >
          Reply
        </button>
      </div>
      {cc === comment._id && isReplying ? (
        <form className="reply flex flex-col space-y-2 pl-[35px]"
          style={{ transition: "1s", }}
          onSubmit={handleSubmit}>
          <textarea className="overflow-hidden resize-none h-[40px] w-full focus:outline-none border-1 rounded-3xl p-2 border-[#413e56] focus:border-white"
            style={{ marginTop: "20px", height: !isReplying ? "0" : null }}
            type="text"
            id="text"
            name="text"
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>

          <input type="hidden" name="parentid" value={parentid}></input>

          <input type="hidden" name="movieid" value={movieid}></input>
          <div className="self-end space-x-1.5 flex ">
            <button className="cursor-pointer pr-2" type="submit">{loading ? "replying.." : "Reply"}</button>
            <button className="cursor-pointer pl-1 pr-1" type="button" onClick={() => {
              handleReply(comment._id);
            }}>cancelll</button>
          </div>
        </form>
      ) : null}



    </div>
  );
};

export default Reply;
