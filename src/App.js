import Signup from "./components/header/SignUp";
import WelcomeScreen from "./components/header/WelcomeScreen";
import { Route } from "react-router-dom";
import { Fragment } from "react";
import Profile from "./components/header/Profile";
// import Navigation from "./components/header/Navigation";
import { Switch } from "react-router-dom";

function App() {
  // const ctx = useContext(AuthContext);

  return (
    <Fragment>
      <Switch>
        <Route path="/" exact>
          <Signup />
        </Route>
        <Route path="/welcomescreen" exact>
          <WelcomeScreen />
        </Route>
        <Route path="/welcomescreen/profile">
          <Profile />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
