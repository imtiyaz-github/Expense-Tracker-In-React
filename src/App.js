import Signup from "./components/header/SignUp";
import WelcomeScreen from "./components/StaringPage/WelcomeScreen";
import { Route } from "react-router-dom";
import { Fragment } from "react";
import Profile from "./components/StaringPage/Profile";
import { Switch } from "react-router-dom";
import Resetpassword from "./components/header/Resetpassword";
// import AddExpenses from "./components/StaringPage/AddExpenses";


function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact>
          <Signup />
        </Route>
        {/* <Route path="/addexpenses">
          <AddExpenses/>
        </Route> */}
        <Route path="/welcomescreen" exact>
          <WelcomeScreen />
        </Route>
        <Route path="/welcomescreen/profile" >
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
