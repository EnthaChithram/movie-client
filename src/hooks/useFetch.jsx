import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useFetch = (url) => {
  const [loading, SetLoading] = useState(true);
  const [error, setError] = useState(null);

  const [Data, SetData] = useState([]);

  const { user } = useContext(AuthContext)

  useEffect(() => {
    if (!url) {
      return;
    }
    setTimeout(() => {
      fetch(url, user ? {
        method: "GET",
        headers: {
          "content-type": "application/json",
          "authorization": `Bearer ` + user.token
        }
      } : null)
        .then((res) => {
          if (!res.ok) {
            // error coming back from server
            throw Error("Doesnt exist");
          }
          return res.json();
        })
        .then((data) => {
          SetLoading(false);
          SetData(data);
        })
        .catch((err) => {
          // auto catches network / connection error
          // SetLoading(false);
          setError(err.message);
        });
    }, 0);
  }, [url]);

  return { loading, Data, error };
};

export default useFetch;
