import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";
import { NavContext } from "../context/navContext";
import { motion, spring } from "framer-motion";


const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [servermsg, setServerMsg] = useState("");

  const { setThh } = useContext(NavContext)
  const { signup, loading, error, message } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(username, password);
  };
  setThh(2)

  return (
    <div className="formdiv  ">
      <motion.form
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: spring, bounce: 0.3 }}

        className="authform shadow-[0_5px_20px_rgba(0,0,0,0.8)]" onSubmit={handleSubmit}> CREATE AN ACCOUNT
        <label className="authlabel">Username</label>
        <input
          className="authinput"
          type="text"
          id="username"
          name="username"
          autoComplete="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className="authlabel">Password</label>
        <input
          className="authinput"
          type="text"
          id="password"
          name="password"
          autoComplete="off"

          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <button type="submit" className="transition duration-300 shadow-[0_5px_20px_rgba(0,0,0,0.8)] hover:shadow-[0_10px_40px_rgba(0,0,0,1)] rounded-md">{loading ? "Signing up..." : "Sign up"}</button>
      </motion.form>

      <div className="mt-4">
        Already have an account? <Link onClick={() => { setThh(1) }} className="text-orange-600 underline " to={"/Login"}>Login</Link>
      </div>
      {message && (
        <div className="">
          <div>{message.message} </div>
          <p style={{ color: "red" }}>{message.error} </p>
        </div>
      )}
    </div>
  );
};

export default Signup;
