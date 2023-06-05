import React, { useRef } from "react";
import classes from "./Profile.module.css";
import AuthContext from "./store/AuthContext";
import { useContext } from "react";

// function Profile() {
//   const inputNameRef = useRef();
//   const inputProfileRef = useRef();

//   const ctx = useContext(AuthContext);

//   const submitHandler = (event) => {
//     event.preventDefault();

//     const enteredName = inputNameRef.current.value;
//     const enteredProfile = inputProfileRef.current.value;

//     //optional:add validation

//     fetch(
//       "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCs1zdQMstoPmRG4AjfS4JwQfNMW7HsMBE",
//       {
//         method: "POST",
//         body: JSON.stringify({
//           idToken: ctx.token,
//           displayName: enteredName,
//           photoUrl: enteredProfile,
//           returnsecureToken: true,
//         })
//           .then((res) => {
//             const data = res.json();
//             data.then((res) => {
//               console.log(res);
//               alert("Profile Updated");
//             });
//           })
//           .catch((error) => {
//             console.log(error);
//             alert("profile update failed");
//           }),
//       }
//     );
//   };

//   return (
//     <section className={classes.head}>
//       <form onSubmit={submitHandler}>
//         <div className={classes.control}>
//           <h3>Winners never quite , Quitteres never win</h3>
//           <span>
//             Your profile is 69% completed. A complete profile has <br /> higher
//             chances of landing a job. <button>Complete now</button>
//           </span>
//         </div>

//         <div className={classes.control1}>
//           <h1>
//             Contact Details <button className={classes.cancel}>Cancel</button>
//           </h1>
//           <label htmlFor="name"> Full Name</label>
//           <input type="text" id="name" required ref={inputNameRef} />
//           <label htmlFor="profile">Profile Photo URL</label>
//           <input
//             type="url"
//             id="url"
//             required
//             ref={inputProfileRef}
//           />{" "}
//           <br />
//           <br />
//           <button type="submit">Update</button>
//         </div>
//       </form>
//     </section>
//   );
// }

// export default Profile;

const Profile = () => {
  const nameRef = useRef();
  const urlRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredUrl = urlRef.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCs1zdQMstoPmRG4AjfS4JwQfNMW7HsMBE",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          displayName: enteredName,
          photoUrl: enteredUrl,
          returnSecureToken: true,
        }),
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            console.log(data);
            if (data.error.message) {
              alert(data.error.message);
            }
          });
        }
      })
      .then((data) => {
        console.log("received data ", data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className={classes.header}>
        <h3>Winners Never Quit. Quitters never win</h3>
        <span>
          Your profile is 69% completed. A complete profile has <br /> higher
          chances of landing a job. <button>Complete now</button>
        </span>
      </div>
      <section className={classes.section}>
        <div className={classes.details}>
          <span>Contact Details</span>
          <button>cancel</button>
        </div>
        <form className={classes.form} onSubmit={submitHandler}>
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" ref={nameRef} />
          <label htmlFor="url">Profile Photo URL :</label>
          <input type="url" id="url" ref={urlRef} />
          <button type="submit">Update</button>
        </form>
      </section>
    </>
  );
};
export default Profile;
