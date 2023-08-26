// import the useState hook from React
import { useState } from "react";
import { login } from "../API";
import { useNavigate } from "react-router-dom";
// create a Signing component, and ensure it is the default export.
// deconsruct SignUpForm()

export default function Login({ token, setToken, username, setUsername }) {
  // create three state variables for our form inputs: username, password, and error. Their default values should be "", "" and null, respectively.

  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    // console.log("Hello 👋");

    // try {
    console.log("Hola");
    const response = await login(username, password);
    // const result = await response.json();
    token = response.data.token;
    window.localStorage.setItem("token", token);
    setToken(token);
    navigate("/posts");
    // }
    console.log(response);
    // console.log("Hola");
    // } catch (error) {
    //   setError(error.message);
    // }
  }
  return (
    <>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:{""}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
