import React from "react";
import { Link } from "react-router-dom";

import "./style.css";
export default function NavBar() {
  return (
    <ul className="list-style">
      <Link to="/" className="list">
        Home
      </Link>
      <Link to="/signIn" className="list">
        Sign In
      </Link>
      <Link to="/SignUp" className="list">
        Sign Up
      </Link>
    </ul>
  );
}
