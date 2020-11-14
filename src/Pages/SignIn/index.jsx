import { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";

import { LoginsContext } from "../../App";
import ClipMessageSent from "../../assets/image/ClipMessageSent.png";
import Button from "../../Components/Button";
import Checkbox from "../../Components/Checkbox";
import Input from "../../Components/Input";
import Logo from "../../Components/Logo";
import NavBar from "../../Components/NavBar";
import * as T from "../../Components/Typography";
import "./style.css";

const schema = yup.object().shape({
  email: yup.string().email().required("❌"),
  password: yup.string().required("❌"),
  checked: yup.string(),
});

const initialState = {
  isLoggedIn: false,
  email: "",
  password: "",
  checked: "",
  error: "",
};

export default function SignIn() {
  const { dispatch } = useContext(LoginsContext);
  const history = useHistory();

  const [state, setState] = useState(initialState);
  const [errors, setErrors] = useState(initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { email, password, checked, error } = state;

  useEffect(() => {
    let mount = true;
    if (isSubmitted) {
      schema
        .validate(state, { abortEarly: false })
        .then(() => {
          if (mount) {
            setErrors({ email: "", password: "", checked: "" });
          }
        })
        .catch((err) => {
          const newErrors = {};
          err.inner.forEach(({ path, message }) => {
            newErrors[path] = message;
          });
          if (mount) {
            setErrors({ ...initialState, ...newErrors });
          }
        });
    }
    return () => {
      mount = false;
    };
  }, [isSubmitted, state]);

  const handleChange = (e) => {
    const { value, name, checked } = e.target;
    let _value = value;
    if (name === "checked") {
      _value = checked;
    }
    setState({ ...state, [name]: _value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (!error) {
      axios
        .post("https://fake-api-ahmed.herokuapp.com/v1/auth/login", {
          email,
          password,
        })
        .then((res) => {
          dispatch({ type: "login" });
          history.push("/");
        })
        .catch((err) => {
          let error = err.response.data.error;
          if (error.includes("duplicate")) {
            error = "Email already exists";
          }
          setState({ error: error });
        });
    }
  };

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
        <form onSubmit={handleSubmit}>
          <div className="inp">
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="mohammed@example.com"
              Texlabel="Email Address"
              handleChange={handleChange}
              value={email}
              error={errors.email}
            />
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="*******************"
              Texlabel="password"
              handleChange={handleChange}
              value={password}
              error={errors.password}
            />
          </div>
          <div className="under-text-input">
            <Checkbox
              type="checkbox"
              name="checked"
              id="checked"
              Texlabel="Remember Me"
              value={checked}
              error={errors.checked}
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
        </form>
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
