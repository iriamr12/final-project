// import { useRef, useEffect, useState, useContext } from "react";
// import AuthContext from "../context/AuthProvider";
// import axios from "../api/axios";
// const LOGIN_URL = "/auth";
// import "./login.css";

// const Login = () => {
//   const { setAuth } = useContext(AuthContext);
//   const userRef = useRef();
//   const errRef = useRef();

//   const [user, setUser] = useState("");
//   const [password, setPassword] = useState("");
//   const [errMsg, setErrMsg] = useState("");
//   const [success, setSuccess] = useState(false);

//   useEffect(() => {
//     userRef.current.focus();
//   }, []);

//   useEffect(() => {
//     setErrMsg('');
//   }, [user, password]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         LOGIN_URL,
//         JSON.stringify({ user, password }),
//         {
//           headers: { "Content-Type": "application/json" },
//           withCredentials: true,
//         }
//       );
//       console.log(JSON.stringify(response?.data)); //check if there is a response 
//       const accessToken = response?.data?.accessToken;
//       const roles = response?.data?.roles; //should be an array of roles
//       setAuth({ user, password, roles, accessToken });
//       setUser('');
//       setPassword('');
//       setSuccess(true);
//     } catch (err) {
//       if (!err?.response) {
//         setErrMsg('No server response');
//       } else if (err.response?.status === 400) {
//         setErrMsg('Missing username or password');
//       } else if (err.response?.status === 401) {
//         setErrMsg('Unauthorised');
//       } else {
//         setErrMsg('Login failed');
//       }
//       errRef.current.focus();
//     }
//   };

import {useState} from "react";
import {authContext} from "./context/AuthenticationProvider";
import {useContext} from "react";
import { Link } from "react-router-dom";

function Login(){
  const[credentials, setCredentials] = useState({
    username: "test",
    password: "test",
  });

  const auth = useContext(authContext);
  console.log("here is the auth context object", auth);

  const {username, password} = credentials;

  const handleChange = (e) => {
    const{name, value} = e.target;
    setCredentials ({...credentials, [name]: value});
  };

  const login =async () => {
    auth.login(credentials);

  };

  const logout = () => {
    //localStorage.removeItem("token");
    auth.logout();
  };

  return (
    <div>
    <div>
    <label htmlFor="username">Username:</label>
      <input
      id="username"
        value={username}
        onChange={handleChange}
        name="username"
        type="text"
        className="form-control mb-2"
        required
      />
       <label htmlFor="password">Password:</label>
      <input
      id="password"
        value={password}
        onChange={handleChange}
        name="password"
        type="password"
        className="form-control mb-2"
        required
      />
      <div className="d-flex gap-2 justify-content-center">
        <button className="btn btn-primary" onClick={login}>
          Log in
        </button>
        <button className="btn btn-outline-dark ml-2" onClick={logout}>
          Log out
        </button>
        <p> Need an Account?<br />
          <span className="line">
          <Link to="/register">Sign Up</Link>
          </span>
        </p>
      </div>
    </div>


  </div>
  //   <div>
  //     {success ? (
  //               <section>
  //                   <h1>You are logged in!</h1>
  //                   <br />
  //                   <p>
  //                       <a href="#">Go to Home</a>
  //                   </p>
  //               </section>
  //           ) : (
  //               <section>
  //                   <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
  //                   <h1>Sign In</h1>
  //                   <form onSubmit={handleSubmit}>
  //                       <label htmlFor="username">Username:</label>
  //                       <input
  //                           type="text"
  //                           id="username"
  //                           ref={userRef}
  //                           autoComplete="off"
  //                           onChange={(e) => setUser(e.target.value)}
  //                           value={user}
  //                           required
  //                       />

  //                       <label htmlFor="password">Password:</label>
  //                       <input
  //                           type="password"
  //                           id="password"
  //                           onChange={(e) => setPassword(e.target.value)}
  //                           value={password}
  //                           required
  //                       />
  //                       <button>Sign In</button>
  //                   </form>
  //                   <p>
  //                       Need an Account?<br />
  //                       <span className="line">
  //                           {/*put router link here*/}
  //                           <Link to="/register">Sign Up</Link>
  //                       </span>
  //                   </p>
  //                   </section>
  // )}
  //           </div>
  );
};

export default Login;

