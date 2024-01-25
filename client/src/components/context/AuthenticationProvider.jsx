import React, { createContext, useState, useEffect, useContext} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export const authContext = createContext();

function AuthenticationProvider ({children}) {

    const [isLoggedIn, setIsLoggedIn] = useState();
    const navigate = useNavigate()

 const login = async (user) => {
    try{
        const{data}= await axios("/api/auth/login", {
            method: "POST",
            data: user,
        });

        localStorage.setItem("token", data.token);
        setIsLoggedIn(true)
        console.log(data.message, data.token);
        navigate('/homepage')
    } catch (error){
        console.log(error);
    }
 };

 const logout = () => {
    localStorage.removeItem("token");
    //set the context
    setIsLoggedIn(false)
  };

 const authContextValue = {
    isLoggedIn,
    login,
    logout
 }
 return (
    <authContext.Provider value={authContextValue}>
        {children}
    </authContext.Provider>
 )
}

export default AuthenticationProvider;