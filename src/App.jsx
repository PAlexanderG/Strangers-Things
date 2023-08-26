import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Register from "./Components/Register";
import Login from "./Components/Login";
import NavBar from "./Components/Nav/NavBar";
import Profile from "./Components/Profile";
import Posts from "./Components/Post";
import Messages from "./Components/Messages";

export default function App() {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );
  const [username, setUsername] = useState(
    localStorage.getItem("username") ? localStorage.getItem("username") : ""
  );
  return (
    <>
      <header>
        <NavBar setToken={setToken} setUsername={setUsername} />
      </header>
      <div id="container">
        <div id="navbar">
          <h1>
            <span className="app-heading">Stranger's Things</span>
          </h1>
        </div>
      </div>
      <div>
        <div id="main-section">
          <Routes>
            {/* Route for Home Componests */}
            <Route path="/register" element={<Register />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/messages" element={<Messages />} />
            <Route
              path="/login"
              element={
                <Login
                  token={token}
                  setToken={setToken}
                  setUsername={setUsername}
                  username={username}
                />
              }
            />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
