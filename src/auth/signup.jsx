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
      <form className="authform" onSubmit={handleSubmit}> CREATE AN ACCOUNT
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

        <button type="submit">Sign Up</button>
      </form>
      {message && (
        <>
          <div>{message.message} </div>
          <p style={{ color: "red" }}>{message.error} </p>
        </>
      )}
    </div>
  );
};

export default Signup;
