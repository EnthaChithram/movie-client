import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useLogout } from "./hooks/useLogout";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const { logout } = useLogout();
  user && console.log("from navbar", user.username);

  return (
    <>
      <div className="  navbar flex justify-center p-8 items-center ">
        <h1>
          <Link className="navtext text-4xl" to="/movies">
            MOVIES
          </Link>
        </h1>
        {user && (
          <h1>
            <Link className="navtext" to="/mycomments">
              my comments
            </Link>
          </h1>
        )}

        {!user && (
          <div>
            <Link className="navtext" to="/signup">
              SIGN UP
            </Link>
            <Link className="navtext" to="/login">
              LOGIN
            </Link>
          </div>
        )}

        {user && <h1>Hello, {user.username} </h1>}

        {user && (
          <h1
            onClick={() => {
              logout();
            }}
          >
            <Link to="/"> logout </Link>
          </h1>
        )}
      </div>
      <div>
        {" "}
        <h3 style={{ color: "red" }}>NO CSS YET </h3>
      </div>
    </>
  );
};

export default Navbar;
