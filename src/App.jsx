import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./navbar";

import Movies from "./movies";
import Moviepage from "./moviePage";

import Selectedcomment from "./selectedcomment";
import Signup from "./auth/signup";
import Users from "./auth/allusers";
import Login from "./auth/login";
import { AuthContext } from "./context/AuthContext";
import { MyComments } from "./mycomments";
import { Loading } from "./loading";
import { LoadingContext } from "./context/loadingContext";
import useFetch from "./hooks/useFetch";
import MovieCard from "./tmdbmovie";
import { Mix } from "./auth/mix";
import { Spacer } from "./spacer";

function App() {
  const { user, loading } = useContext(AuthContext);
  const { isloading } = useContext(LoadingContext);

  const { loading: serverloading, error } = useFetch(
    import.meta.env.VITE_API_URL + "movies/"
  );

  if (serverloading) {
    return (
      <div>
        <div className="please">SERVER COLD-START</div>
        <div className="server">PLEASE WAIT FOR 20 SECONDS</div>
        {error && <h1>{error}</h1>}
      </div>
    );
  }

  return (
    <div>
      <Router>
        <Navbar />
        <Spacer height="115px" />
        {/* <Mix /> */}

        <Routes>
          <Route path="/" element={<Movies />}></Route>

          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:id" element={<Moviepage />}></Route>
          <Route path="/comments/:id" element={<Selectedcomment />}></Route>
          <Route path="/tmdb" element={<MovieCard />}></Route>
          <Route path="/mix" element={<Mix />}></Route>

          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/" />}
          ></Route>
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          ></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/mycomments" element={<MyComments />}></Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
