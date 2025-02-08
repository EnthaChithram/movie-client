import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useLogout } from "./hooks/useLogout";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const { logout } = useLogout();


  return (
    <div className="animate-slide-down fixed z-100 w-[1200px] mx-auto bg-[#e5ebf4cc] shadow-black shadow-xl rounded-[5px] h-[75px] left-0 right-0 flex flex-col justify-center mt-4 pl-2 pr-2 mb-10" style={{}}>
      <div className=" navbar flex justify-center items-center">
        <h1>
          <Link className=" navtext mr-auto text-4xl " to="/movies">
            MOVIES
          </Link>
        </h1>


        {!user && (
          <div className="ml-auto ">
            <Link className="navtext mr-3" to="/signup">
              SIGN UP
            </Link>
            <Link className="navtext mr-3" to="/login">
              LOGIN
            </Link>
          </div>
        )}

        {user && <h1 className="navtext mx-auto" >Hello, {user.username}! </h1>}



        {user && (
          <div className="flex flex-col">
            <h1>
              <Link className="navtext " to="/mycomments">
                My comments
              </Link>
            </h1>

            <h1 className="underline self-end "
              onClick={() => {
                logout();
              }}
            >
              <Link className="navtext " to="/"> Logout </Link>
            </h1>
          </div>
        )}
      </div>

    </div>
  );
};

export default Navbar;
