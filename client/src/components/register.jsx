// import { useRef, useState, useEffect } from "react";
// import {
//   faCheck,
//   faTimes,
//   faInfoCircle,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import axios from "../api/axios";
// import { useNavigate } from 'react-router-dom';
// import { Link } from "react-router-dom";

// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const REGISTER_URL = "/register";

// const register = () => {
//   const userRef = useRef();
//   const errRef = useRef();
//   const navigate = useNavigate();

//   const [user, setUser] = useState("");
//   const [validName, setValidName] = useState(false);
//   const [userFocus, setUserFocus] = useState(false);

//   const [password, setPassword] = useState("");
//   const [validPassword, setValidPassword] = useState(false);
//   const [pwdFocus, setPwdFocus] = useState(false);

//   const [matchPwd, setMatchPwd] = useState("");
//   const [validMatch, setValidMatch] = useState(false);
//   const [matchFocus, setMatchFocus] = useState(false);

//   const [errMsg, setErrMsg] = useState("");
//   const [success, setSuccess] = useState(false);

//   useEffect(() => {
//     userRef.current.focus();
//   }, []);

//   useEffect(() => {
//     const result = USER_REGEX.test(user);
//     console.log(result);
//     console.log(user);
//     setValidName(result);
//   }, [user]);

//   useEffect(() => {
//     const result = PWD_REGEX.test(password);
//     console.log(result);
//     console.log(password);
//     setValidPassword(result);
    
//     const match = (password === matchPwd);
//     setValidMatch(match);
// }, [password, matchPwd]);

//   useEffect(() => {
//     setErrMsg("");
//   }, [user, password, matchPwd]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         REGISTER_URL,
//         JSON.stringify({ user, pwd: password }),
//         {
//           headers: { "Content-type": "application/json" },
//           withCredentials: true,
//         }
//       );
//       console.log(response.data);
//       console.log(response.accessToken);
//       console.log(JSON.stringify(response))
//       setSuccess(true);
//     } catch (err) {
//         if (!err?.response) {
//           setErrMsg('No server response');
//         } else if (err.response?.status === 409) {
//           setErrMsg('Username taken');
//         } else {
//           setErrMsg('Registration failed');
//         }
//         errRef.current.focus();
//     }
//   }

//   return (
//     <>
//       {success ? (
//         <section>
//           <h1>Success!</h1>
//           <p>
//             <a href="#">Sign in</a>
//           </p>
//         </section>
//       ) : (
//         <section>
//           <p
//             ref={errRef}
//             className={errMsg ? "errmsg" : "offscreen"}
//             aria-live="assertive"
//           >
//             {errMsg}
//           </p>
//           <h1>Register</h1>
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="username">
//               Username:
//               <span className={validName ? "valid" : "hide"}>
//                 <FontAwesomeIcon icon={faCheck} />
//               </span>
//               <span className={validName || !user ? "hide" : "invalid"}>
//                 <FontAwesomeIcon icon={faTimes} />
//               </span>
//             </label>
//             <input
//               type="text"
//               id="username"
//               ref={userRef}
//               autoComplete="off"
//               onChange={(e) => setUser(e.target.value)}
//               value={user}
//               required
//               aria-invalid={validName ? "false" : "true"}
//               aria-describedby="uidnote"
//               onFocus={() => setUserFocus(true)}
//               onBlue={() => setUserFocus(false)}
//             />

//             <label htmlFor="password">
//                 Password:
//                 <span className={validPassword ? "valid" : "hide"}>
//                     <FontAwesomeIcon icon={faCheck} />
//                 </span>
//                 <span className={validPassword || !password ? "hide" : "invalid"}>
//                     <FontAwesomeIcon icon={faTimes} />
//                 </span>
//             </label>
//             <input
//                 type="password"
//                 id="password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 // Fix the typo here, use "validPassword" instead of "validPwd"
//                 aria-invalid={validPassword ? "false" : "true"}
//                 aria-describedby="pwdnote"
//                 onFocus={() => setPwdFocus(true)}
//                 onBlur={() => setPwdFocus(false)}
//             />
//             <p
//               id="pwdnote"
//               className={
//                 pwdFocus && user && !validPassword
//                   ? "instructions"
//                   : "offscreen"
//               }
//             >
//               <FontAwesomeIcon icon={faInfoCircle} /> 8 to 24 characters. <br />
//               Must include uppercase and lowercase letters, a number and a
//               special character <br />
//               Allowed special characters:{" "}
//               <span aria-label="exclamation mark">!</span>{" "}
//               <span aria-label="at symbol">@</span>{" "}
//               <span aria-label="hashtag">#</span>{" "}
//               <span aria-label="dollar sign">$</span>{" "}
//               <span aria-label="percent">%</span>
//             </p>

//             <label htmlFor="confirm_pwd">
//               Confirm password:
//               <span className={validMatch ? "valid" : "hide"}>
//                 <FontAwesomeIcon icon={faCheck} />
//               </span>
//               <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
//                 <FontAwesomeIcon icon={faTimes} />
//               </span>
//             </label>
//             <input
//               type="password"
//               id="confirm_pwd"
//               onChange={(e) => setMatchPwd(e.target.value)}
//               required
//               aria-invalid={validPassword ? "false" : "true"}
//               aria-describedby="confirmnote"
//               onFocus={() => setMatchFocus(true)}
//               onBlue={() => setMatchFocus(false)}
//             />
//             <p
//               id="pwdnote"
//               className={
//                 matchFocus && !validMatch ? "instructions" : "offscreen"
//               }
//             >
//               <FontAwesomeIcon icon={faInfoCircle} /> Must match the first
//               password input field.
//             </p>

//             <button
//               disabled={!validName || !validPwd || !validMatch ? true : false}
//             >
//               Sign up
//             </button>
//           </form>
//           <p>
//             Already have an account?
//             <br />
//             <span className="line">
//               {/*put router link here*/}
//               <Link to="/login">Login</Link>
//             </span>
//           </p>
//         </section>
//       )}
//     </>
//   );
// };

// export default register;

import {useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Link, Route, Routes } from 'react-router-dom';


export default function Register() {

const [registrationData, setRegistrationData] = useState({
        username: "",
        password: "",
        });


const[data, setData] = useState('');

const {username, password} = data;
const navigate = useNavigate();


const handleChange = (e) => {
    const{name, value} = e.target;
    setRegistrationData({...registrationData, [name]:value});
};

const registration = async () => {
    try{
      const { data } = await axios.post("api/auth/register", registrationData);
        navigate("/homepage");
    } catch (error){
        console.log(error);
    }

}

return(
    
    <div className="custom-form-container">
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                        <div className="card-body p-5 text-center">
                            <div>
                                <h3 className="mb-5">Registration</h3>
                                    <div className="form-outline mb-4">
                                        <input 
                                        type="text" 
                                        className="form-control form-control-lg"
                                        name="username"
                                        value={username}
                                        onChange={handleChange} 
                                        placeholder="Desired user"
                                        />
                                    </div>
                                                        <div className="form-outline mb-4">
                                                                <input 
                                                                type="text" 
                                                                className="form-control form-control-lg"
                                                                name="password"
                                                                value={password}
                                                                onChange={handleChange} 
                                                                placeholder="Password"
                                                                />
                                                        </div>
                                                        <button className="registration-button" type="submit" onClick={registration}>Registrate</button>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 <p>
//             Already have an account?
//             <br />
//             <span className="line">
//               {/*put router link here*/}
//               <Link to="/login">Login</Link>
//             </span>
//           </p>
 </div>

)  
}