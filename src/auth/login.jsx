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
      <form className="authform shadow-[0_5px_20px_rgba(0,0,0,0.8)]" onSubmit={handleSubmit}> LOGIN
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

        <button className="transition duration-300 shadow-[0_5px_20px_rgba(0,0,0,0.8)] hover:shadow-[0_10px_40px_rgba(0,0,0,1)] rounded-md" type="submit">Login</button>
      </form>








      <div className="mt-4">
        Don't have an account? <Link className="text-orange-600 underline" to={"/signup"}>Signup</Link>
      </div>
      {message && (
        <><div>{message.message} </div>
          <p style={{ color: "red" }}>{message.error} </p></>)}
    </div>
  );
};

export default Login;
