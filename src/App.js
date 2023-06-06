import Signup from "./components/header/SignUp";
import WelcomeScreen from "./components/header/WelcomeScreen";
import { Route } from "react-router-dom";
import { Fragment } from "react";
import Profile from "./components/header/Profile";
import { Switch } from "react-router-dom";
import Resetpassword from "./components/header/Resetpassword";
import AddExpenses from "./components/header/AddExpenses";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact>
          <Signup />
        </Route>
        <Route path="/addexpenses" exact>
          <AddExpenses />
        </Route>
        <Route path="/welcomescreen" >
          <WelcomeScreen />
        </Route>
        <Route path="/welcomescreen/profile">
          <Profile />
        </Route>
        <Route path="/resetpassword" exact>
          <Resetpassword />
        </Route>
      
      </Switch>
    </Fragment>
  );
}

export default App;
