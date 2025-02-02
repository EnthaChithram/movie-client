import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useLogout } from "./hooks/useLogout";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const { logout } = useLogout();


  return (
    <>
      <div className=" navbar flex justify-center p-8 items-center">
        <h1>
          <Link className=" navtext mr-auto text-4xl hover:shadow-[0_5px_20px_rgba(0,0,0,0.8)]" to="/movies">
            MOVIES
          </Link>
        </h1>
        {user && (
          <h1>
            <Link className="navtext hover:shadow-[0_5px_20px_rgba(0,0,0,0.8)] p-1" to="/mycomments">
              my comments
            </Link>
          </h1>
        )}

        {!user && (
          <div className=" ">
            <Link className="navtext self-end hover:shadow-[0_5px_20px_rgba(0,0,0,0.8)] " to="/signup">
              SIGN UP
            </Link>
            <Link className="navtext self-end hover:shadow-[0_5px_20px_rgba(0,0,0,0.8)]" to="/login">
              LOGIN
            </Link>
          </div>
        )}

        {user && <h1 className="pr-2 ml-auto mr-15" >Hello, {user.username}! </h1>}


        {user && (
          <h1 className=""
            onClick={() => {
              logout();
            }}
          >
            <Link to="/"> Logout </Link>
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
