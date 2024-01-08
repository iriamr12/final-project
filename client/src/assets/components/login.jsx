import React, { useRef, useEffect, useState } from "react";
import "./login.css";

function Login() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();

  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [user, password])

  return (
    
    <div>
    <p ref-{errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
    <h1>Sign in</h1>
    <form>
    <label htmlFor="username">Username:</label>
    <input type="text" id="username" ref={userRef} autoComplete ="off" onChange={(e) => setUser(e.target.value)} value = {user} required />

    <label htmlFor="password">Password:</label>
    <input type="password" id="password" ref={userRef} autoComplete ="off" onChange={(e) => setPassword(e.target.value)} value = {password} required />

    <button>Sign in</button>
    </form>



  </div>);
}

export default Login;
