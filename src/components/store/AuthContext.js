// import React, { useState } from "react";
// const AuthContext = React.createContext({
//   token: "",
//   userEmail: "",
//   isLoggedIn: false,
//   login: (token) => {},
//   logout: () => {},
//   // token:localStorage.getItem('token'),
//   // email:localStorage.getItem('email')
// });

// export const AuthContextProvider = (props) => {
//   const initialEmail = localStorage.getItem("email");
//   const [userEmail, SetUserEmail] = useState(initialEmail);

//   const initialToken = localStorage.getItem("token");
//   const [token, setToken] = useState(initialToken);
//   const userIsLoggedIn = !!token;

//   const loginHandler = (token, email) => {
//     setToken(token);
//     SetUserEmail(email);
//     localStorage.setItem("token", token);
//     localStorage.setItem("email", email);
//     console.log(token, userEmail);
//   };

//   const logoutHandler = () => {
//     setToken(null);
//     localStorage.removeItem("token");
//     localStorage.removeItem("email");
//   };

//   const contextValue = {
//     token: token,
//     userEmail: userEmail,
//     isLoggedIn: userIsLoggedIn,
//     login: loginHandler,
//     logout: logoutHandler,
//   };

//   return (
//     <AuthContext.Provider value={contextValue}>
//       {props.children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;


import React,{useState} from "react";

const AuthContext= React.createContext({
    token: "",
    isLoggedIn : false,
    login: (token)=>{},
    logout: ()=>{}
}) 

export const AuthContextProvider =(props)=>{
    // const [token, setToken] = useState(null)
    const initialToken = localStorage.getItem('token')
    const [token, setToken] = useState(initialToken)


const userIsLoggedIn =token ? true : false

const loginHandler= (token)=>{
 setToken(token) 
 localStorage.setItem('token',token)
}


const logoutHandler = () =>{
    setToken(null)
    localStorage.removeItem('token')
}


const contextValue ={
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler 
}
return (<AuthContext.Provider value={contextValue}>
    {props.children}
    </AuthContext.Provider>
)
}
export default AuthContext;
