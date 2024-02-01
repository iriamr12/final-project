
import { useState } from "react";
import { authContext } from "./context/AuthenticationProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import './Login.css'


function Login() {
  const [credentials, setCredentials] = useState({
    username: "test",
    password: "test",
  });

  const auth = useContext(authContext);
  console.log("here is the auth context object", auth);

  const { username, password } = credentials;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  // const login = async () => {
  //   auth.login(credentials);
  // };

  const login = async () => {
    try {
      await auth.login(credentials);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  

  const logout = () => {
    //localStorage.removeItem("token");
    auth.logout();
  };

  return (
    <div>
      <div className="card-body-login">
        <div className="login-details-card">
        <h3 className="login-header">Login</h3>
        <br/>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            value={username}
            onChange={handleChange}
            name="username"
            placeholder="Username"
            type="text"
            className="form-control mb-2"
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
            name="password"
            type="password"
            className="form-control mb-2"
            required
          />
        </div>
        <div>
        <br/>
          <button onClick={login}>
            Log in
          </button>
          <button onClick={logout}>
            Log out
          </button>
          <p>
            {" "}
            Need an Account?
            <br />
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
}

export default Login;
