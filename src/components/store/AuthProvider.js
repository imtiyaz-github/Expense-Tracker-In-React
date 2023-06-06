// import React, { useState } from "react";
// import AuthContext from "./AuthContext";

// function AuthProvider(props) {
//   const intailLogin = localStorage.getItem("idToken");
//   const [userIsLogin, setuserIsLogin] = useState(intailLogin);

//   const loginHandler = () => {
//     setuserIsLogin(true);
//   };

//   const logoutHandler = () => {
//     localStorage.removeItem("idToken");
//     setuserIsLogin(false);
//   };

//   const verificationHandler = () => {};

//   const authValues = {
//     isLogin: userIsLogin,
//     login: loginHandler,
//     logout: logoutHandler,
//     varification: verificationHandler,
//   };

//   return (
//     <AuthContext.Provider value={authValues}>
//       {props.children}
//     </AuthContext.Provider>
//   );
// }

// export default AuthProvider;
