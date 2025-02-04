import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [servermsg, setServerMsg] = useState("");
  const { signup, loading, error, message } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(username, password);
  };

  return (
    <div className="formdiv  ">
      <form className="authform shadow-[0_5px_20px_rgba(0,0,0,0.8)]" onSubmit={handleSubmit}> CREATE AN ACCOUNT
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

        <button type="submit" className="transition duration-300 shadow-[0_5px_20px_rgba(0,0,0,0.8)] hover:shadow-[0_10px_40px_rgba(0,0,0,1)] rounded-md">Sign Up</button>
      </form>

      <div className="mt-4">
        Already have an account? <Link className="text-orange-600 underline " to={"/Login"}>Login</Link>
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
