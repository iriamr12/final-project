import { useRef, useState, useEffect } from "react";
import ( faCheck, faTimes, faInfoCircle ) from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';


const register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus(); 
    }, [])

    useEffect(()=> {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user])

    useEffect(() => {
        const result = PWD_REGEX.test(password);
        console.log(result);
        console.log(password);
        setValidName(result); 
        const match = password = matchPwd;
        setValidMatch(match);

    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');

    } [user, password, matchPwd])

  return (
    <section>

        <h1>Register</h1>
        <form>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            aria-invalid={validname ? "false":"true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlue={ ()=> setUserFocus(false)}
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} /> 4 to 24 characters. <br/>
                        Must begin with a letter. <br />
                        Letters, numbers, underscores, hyphens allowed.</p>
                        <button>Sign up</button>
                    </form>
                    <p>
                        Already have an account?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="/login">Login</a>
                        </span>
                    </p>
    </section>
  )
}

export default register;
//<p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>