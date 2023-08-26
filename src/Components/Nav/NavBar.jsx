import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar({ setToken, setUsername }) {
  const handleClick = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setToken("");
    setUsername("");
  };
  return (
    <div className="nav-bar-container">
      {/* <NavLink to="/">Home</NavLink> */}
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/messages">Messages</NavLink>

      {localStorage.getItem("token") ? null : (
        <NavLink to="/login">Login</NavLink>
      )}
      {localStorage.getItem("token") ? (
        <button onClick={handleClick}>Logout</button>
      ) : null}
    </div>
  );
}
