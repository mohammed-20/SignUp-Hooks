import { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import { LoginsContext } from "../../App";

import ClipMessageSent from "../../assets/image/ClipMessageSent.png";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Logo from "../../Components/Logo";
import NavBar from "../../Components/NavBar";
import * as T from "../../Components/Typography";
import "./style.css";

const schema = yup.object().shape({
  email: yup.string().email().required("❌"),
  password: yup.string().required("❌").min(8),
  repassword: yup
    .string()
    .required("❌")
    .oneOf([yup.ref("password"), ""], "Passwords must match"),
});
const initialState = {
  email: "",
  password: "",
  repassword: "",
  error: "",
};

export default function SignUp() {
  const { dispatch } = useContext(LoginsContext);
  const [state, setState] = useState(initialState);
  const [errors, setErrors] = useState(initialState);
  const history = useHistory();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { email, password, repassword, error } = state;
  useEffect(() => {
    let mount = true;
    if (isSubmitted) {
      schema
        .validate(state, { abortEarly: false })
        .then(() => {
          if (mount) {
            setErrors({ email: "", password: "", repassword: "" });
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
    const { value, name } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (!error) {
      axios
        .post("https://fake-api-ahmed.herokuapp.com/v1/auth/signup", {
          email,
          password,
        })
        .then((res) => {
          dispatch({ type: "signup" });
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
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inp-signUp">
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="mohammed@example.com"
              Texlabel="Enter Email Address"
              handleChange={handleChange}
              value={email}
              error={errors.email}
            />
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="*******************"
              Texlabel=" Enter password"
              handleChange={handleChange}
              value={password}
              error={errors.password}
            />
            <Input
              type="password"
              name="repassword"
              id="repassword"
              placeholder="*******************"
              Texlabel="Repeat Password"
              handleChange={handleChange}
              value={repassword}
              error={errors.repassword}
            />
          </div>

          <Button type="submit" className="loginBtn">
            Sign Up
          </Button>
          <Link to="/">
            <Button className="signUpBtn">Log In</Button>
          </Link>
        </form>
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
