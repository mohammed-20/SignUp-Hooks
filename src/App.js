import { useReducer, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrevetRouter from "./Components/PrevetRouter";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";

import "./App.css";

const initialState = {
  isLoggedIn: false,
  email: "",
  password: "",
  checked: "",
  isAuthenticated: false,
};

function loginReducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        isLoggedIn: true,
        error: "",
        isAuthenticated: true,
      };
    case "signup":
      return {
        isLoggedIn: true,
        error: "",
        isAuthenticated: true,
      };
    case "logout":
      return { isLoggedIn: false, error: "" };
    case "error":
      return { ...state, error: action.error };

    default:
      throw new Error("Invalid action type");
  }
}

export const LoginsContext = createContext({
  state: initialState,
  dispatch: null,
});
function App() {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  return (
    <div className="App">
      <Router>
        <Switch>
          <LoginsContext.Provider value={{ state, dispatch }}>
            <PrevetRouter
              exact
              path="/"
              isAuthenticated={state.isAuthenticated}
            >
              <Home />
            </PrevetRouter>
            <Route path="/signIn" exact>
              <SignIn />
            </Route>
            <Route path="/SignUp" exact>
              <SignUp />
            </Route>
          </LoginsContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
