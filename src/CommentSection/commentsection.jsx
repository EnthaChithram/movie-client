import { useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Nestedversion from "../nestedversion";
import Newcomment from "./newcomment";
import Reply from "./reply";
import { useCommentsContext } from "../hooks/useCommentsContext";
import { formatDistanceToNow } from "date-fns";
import { AuthContext } from "../context/AuthContext";

const Commentsection = ({ movie, loading }) => {
  const { cc, comments, dispatch, isReplying } = useCommentsContext();

  // const [cc, setcc] = useState(null);
  const [view, setView] = useState(true);
  const [reply, setReply] = useState(true);
  const { user } = useContext(AuthContext);

  // const handleReply = (id) => {
  //   if (cc === id) {
  //     dispatch({ type: isReplying ? "reply_off" : "reply_on" });
  //   } else {
  //     setcc(id);
  //     dispatch({ type: "reply_on" });
  //   }
  // };

  const handleDelete = async (id, childrenlength) => {
    if (childrenlength === 0) {
      dispatch({ type: "delete_comment", payload: id });
    } else {
      dispatch({ type: "update", payload: id });
    }

    const response = await fetch(
      import.meta.env.VITE_API_URL + "commentu/" + id,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ` + user.token,
        },
      }
    );

    const json = await response.json();
  };

  const renderComments = (comments) => {
    return comments.map((comment) => (
      <div className={' flex flex-col z-10'}
        key={comment._id}
        style={{
          marginLeft: comment.parentid === null ? "10px" : "40px", marginTop: "5px", marginBottom: comment.parentid === null ? "30px" : null, transition: "0.5s"

        }}
      >

        <div className="flex w-full items-center " style={{
          marginBottom: "10px", transition: "1s"
        }}>
          <strong className="transition-all duration-1000 shadow-[0_2px_10px_rgba(0,0,0,0.8),0_-0.5px_10px_rgba(0,0,0,0.8)] rounded-3xl pl-3 pr-3 pb-0.5">
            @{comment.userid ? comment.userid?.username : "[deleted]"}
          </strong>{" "}
          <i className=" pl-1 pr-1" style={{ fontSize: "12px" }}>
            {" "}
            {formatDistanceToNow(new Date(comment.createdAt), {
              addSuffix: true,
            })}
          </i>{" "}
          {user && comment.userid && comment.userid._id === user.userid ? (
            <button className="z-10 shadow-[0_2px_5px_rgba(0,0,0,0.8),0_-0.5px_5px_rgba(0,0,0,0.8)] transition-transform duration-300 hover:translate-y-[-3px] hover:shadow-[0_2px_20px_rgba(0,0,0,0.8)] cursor-pointer rounded-3xl pl-3 pr-3 pb-0.5"
              onClick={() => {
                handleDelete(comment._id, comment.children.length);
              }}
            >
              Delete
            </button>
          ) : null}
        </div>

        <div className="text-left shadow-[0_5px_20px_rgba(0,0,0,0.8),0_-0.5px_20px_rgba(0,0,0,0.8)] rounded-md pl-4 pt-2 pb-2 bg-[#1d232a] z-3" >
          {comment.text}

        </div>

        <div className=" transition-transform transform duration-1000"
          style={{ height: cc === comment._id ? "50px" : "30px", transition: "0.5s", marginBottom: cc === comment._id ? "70px" : "0", }}>
          <Reply movie={movie} comment={comment} />
        </div>

        {/* children loop*/}
        {/* {console.log(comment.parentid)} */}
        {comment.children && comment.children.length > 0 && (
          <div>{renderComments(comment.children)}</div>
        )}
      </div>
    ));
  };

  return (
    <div
      style={{
        maxWidth: "750px",
        margin: "auto",
        textAlign: "center",

        padding: "5px",

      }}
    >
      <div>-----</div>
      <br></br>

      <Newcomment movie={movie} />

      <div>
        <h1 className=" transition-all duration-1000 font-extrabold text-orange-600">{loading ? "Loading comments..." : "Comments:"}</h1>
        {comments && comments.length > 0 ? (
          renderComments(Nestedversion(comments))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default Commentsection;
