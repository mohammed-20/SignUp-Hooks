import React from "react";
import { Link } from "react-router-dom";
import ClipMessageSent from "../../assets/image/ClipMessageSent.png";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Logo from "../../Components/Logo";
import NavBar from "../../Components/NavBar";
import * as T from "../../Components/Typography";
import "./style.css";

export default function SignUp() {
  return (
    <div className="stylePage">
      <div className="left-side">
        <Logo />
        <div>
          <T.H1 className="title">
            Artificial Intelligence Driving Results For The Travel Industry
          </T.H1>
        </div>
        <from>
          <div className="inp-signUp">
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="mohammed@example.com"
              Texlabel="Enter Email Address"
            />
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="*******************"
              Texlabel=" Enter password"
            />
            <Input
              type="password"
              name="repassword"
              id="repassword"
              placeholder="*******************"
              Texlabel="Repeat Password"
            />
          </div>

          <div>
            <Button type="submit" className="loginBtn">
              Sign Up
            </Button>
            <Link to="/SignIn">
              <Button className="signUpBtn">Log In</Button>
            </Link>
          </div>
        </from>
        <div className="footer">
          <T.P>Or Sign Up with</T.P>
          <T.P>
            <a href="www.facebook.com">Facebook </a>
          </T.P>
          <T.P>
            <a href="www.linkedin.com">LinkedIn</a>
          </T.P>
          <T.P>
            <a href="www.google.com">Google</a>
          </T.P>
        </div>
      </div>
      <div className="right-side">
        <NavBar />
        <img className="img" src={ClipMessageSent} alt="ClipMessageSent" />
      </div>
    </div>
  );
}
