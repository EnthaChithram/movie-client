import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [servermsg, setServerMsg] = useState([]);

  const { error, loading, login, message } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(username, password);
    setServerMsg(message);
    console.log(message);
  };

  return (
    <div className="formdiv">
      <form className="authform" onSubmit={handleSubmit}> LOGIN
        <label className="authlabel">Username</label>
        <input className="authinput"
          type="text"
          id="username"

          name="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className="authlabel">Password</label>
        <input className="authinput"
          type="text"
          id="password"
          name="password"
          autoComplete="off"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <button type="submit">Login</button>
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

export default Login;
