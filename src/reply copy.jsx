import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { commentsContext } from "./context/commentscontext";

const Reply = ({ movie, comment }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [parentid, setParentid] = useState(comment._id);
  const [movieid, setMovieid] = useState(movie._id);
  const [year, setYear] = useState("");

  const { user } = useContext(AuthContext);
  const { comments, dispatch } = useContext(commentsContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
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
      dispatch({ type: "reply_off" });
      dispatch({ type: "create_comment", payload: json });
    }
    else {
      navigate("/signup")
    }
  }



  const handleReply = (id) => {
    if (cc === id) {
      dispatch({ type: isReplying ? "reply_off" : "reply_on" });
    } else {
      setcc(id);
      dispatch({ type: "reply_on" });
    }
  };

  {
    cc === comment._id && isReplying ? (
      <Reply movie={movie} comment={comment} />
    ) : null
  }

  return (
    <div>
      {cc === comment._id && isReplying ? (
        <Reply movie={movie} comment={comment} />
      ) : null}


      <form className="reply flex flex-col space-y-2 " onSubmit={handleSubmit}>
        <textarea className="h-[50px] w-full focus:outline-none border-1 rounded-3xl p-3 border-[#413e56] focus:border-white"
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
          <button type="submit">reply</button>
          <button type="button">reply</button>
        </div>
      </form>
    </div>
  );
};

export default Reply;
