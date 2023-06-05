import Signup from "./components/header/SignUp";
import { useContext, Fragment } from "react";
// import AuthProvider from "../src/components/store/AuthProvider";
import Header from "./components/header/Header";
import AuthContext from "./components/store/AuthContext";
// import Navigation from "./components/header/Navigation";
import Profile from "./components/Profile";
// import { Route, Routes } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

// import AuthProvider from "./components/store/AuthProvider";

function App() {
  const ctx = useContext(AuthContext);

  return (
   
    <Fragment>
      <Routes>
        <Route path="/signup" elment={!ctx.isLogin ? <Signup /> : <Header />} />
        <Route path="/" element={!ctx.isLogin ? <Signup /> : <Profile />} />
      </Routes>
    </Fragment>
  );
}

export default App;
