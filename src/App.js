import Signup from "./components/header/SignUp";
import Header from "./components/header/Header";
import Product from "./components/product/Product";
import { useState } from "react";

function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSignUpComplete = () => {
    setIsSignedUp(true);
  };

  return (
    <>
     <Header/>
    
    {!isSignedUp ? (
      
      <Signup onSignupcomplete={handleSignUpComplete}/>
    ) : (
    <Product />
    )}
       
    </>
  );
}

export default App;
