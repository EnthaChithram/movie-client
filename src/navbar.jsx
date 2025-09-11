import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useLogout } from "./hooks/useLogout";
import { motion, spring } from "framer-motion";
import { NavContext } from "./context/navContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { KeyboardArrowDown } from "@mui/icons-material";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const { logout } = useLogout();
  const { thh, setThh } = useContext(NavContext)

  const [menu, setMenu] = useState(false)


  // bg-[#e5ebf4cc] shadow-black shadow-xl navbar bg

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, type: spring, bounce: 0.3 }}
      className="text-sm md:text-[16px]  z-100 md:w-[1200px] mx-auto   rounded-[5px] h-[75px] left-0 right-0 flex flex-col justify-center mt-2 pl-2 pr-2 " style={{}}>
      <div className=" navbar flex justify-center items-center">
        <h1 className="mr-auto max-w-[20px] ">
          <Link onClick={() => { setThh(null) }} className="w-[136px] text-2xl navtext md:text-4xl " to="/movies">
            MOVIES
          </Link>
        </h1>


        {!user && (
          <div className=" ml-auto flex shadow-black shadow-sm  py-1 space-x-4 rounded-4xl ">

            <Link onClick={() => { setThh(1) }} className={`relative px-3 ${thh === 1 ? "text-black font-bold" : "navtext"} transition-all duration-350 `} to="/login">
              LOGIN
              {thh === 1 &&
                <motion.div
                  layoutId="znz"
                  transition={{ type: spring, bounce: 0.2, duration: 0.5 }}
                  className="absolute rounded-4xl bottom-0 left-0 right-0 h-full w-full bg-orange-600   -z-10"
                />}
            </Link>

            <Link onClick={() => { setThh(2) }} className={`relative px-3 ${thh === 2 ? "text-black font-bold " : "navtext "} transition-all duration-350`} to="/signup">
              SIGN UP
              {thh === 2 &&
                <motion.div
                  layoutId="znz"
                  transition={{ type: spring, bounce: 0.225, duration: 0.5 }}
                  className="absolute rounded-4xl bottom-0 left-0 right-0 h-full bg-orange-600 -z-10"
                />}
            </Link>





          </div>
        )}


        {user && <motion.div className="relative flex items-center text-center navtext ml-auto"
          onMouseEnter={() => { setMenu(true) }} onMouseLeave={() => { setMenu(false) }} >
          <h1 className="navtext ml-auto px-3" >{user.username} </h1>
          <button className="relative">
            <AccountCircleIcon style={{ fontSize: 40, color: "#ea580c" }} />
            <KeyboardArrowDown style={{ fontSize: 35, color: "#ea580c" }} />

            {menu &&
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}

                transition={{ duration: 0.3 }}
                className="absolute z-100 top-full w-auto sm:left-[-100%] lg:left-0 bg-black text-black rounded-md px-2 py-1.5">
                <h1>
                  <Link className="navtext whitespace-nowrap " to="/mycomments">
                    My comments
                  </Link>
                </h1>
                <h1 className="underline self-end "
                  onClick={() => {
                    logout();
                    setMenu(false)
                  }}
                >
                  <Link className="navtext " to="/"> Logout </Link>
                </h1>
              </motion.div>
            }

          </button>


        </motion.div>}



        {/* {user && (
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
        )} */}

      </div>



    </motion.div>
  );
};

export default Navbar;
