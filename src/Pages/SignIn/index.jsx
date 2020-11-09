import React from "react";
import { Link } from "react-router-dom";
import ClipMessageSent from "../../assets/image/ClipMessageSent.png";
import Button from "../../Components/Button";
import Checkbox from "../../Components/Checkbox";
import Input from "../../Components/Input";
import Logo from "../../Components/Logo";
import NavBar from "../../Components/NavBar";
import * as T from "../../Components/Typography";
import "./style.css";

export default function SignIn() {
  return (
    <div className="stylePage">
      <div className="left-side">
        <Logo />
        <div>
          <T.H1 className="title">
            Artificial Intelligence Driving Results For The Travel Industry
          </T.H1>
          <T.Subtitle>Welcome back! Please login to your account.</T.Subtitle>
        </div>
        <from>
          <div className="inp">
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="mohammed@example.com"
              Texlabel="Email Address"
            />
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="*******************"
              Texlabel="password"
            />
          </div>
          <div className="under-text-input">
            <Checkbox
              type="checkbox"
              name="checked"
              id="checked"
              Texlabel="Remember Me"
            />
            <T.P>Forgot Password?</T.P>
          </div>
          <div>
            <Button type="submit" className="loginBtn">
              Login
            </Button>
            <Link to="/SignUp">
              <Button className="signUpBtn">Sign Up</Button>
            </Link>
          </div>
        </from>
        <div className="footer">
          <T.P>Or login with</T.P>
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
