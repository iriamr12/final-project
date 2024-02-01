import React, { createContext, useState, useEffect, useContext} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const authContext = createContext();

function AuthenticationProvider ({children}) {

    const [isLoggedIn, setIsLoggedIn] = useState();
    const [favoriteBooks, setFavoriteBooks] = useState([]);
    const navigate = useNavigate()

//  const login = async (user) => {
//     try{
//         const{data}= await axios("/api/auth/login", {
//             method: "POST",
//             data: user,
//         });

//         localStorage.setItem("token", data.token);
//         setIsLoggedIn(true)
//         console.log(data.message, data.token);
//         navigate('/homepage')
//     } catch (error){
//         console.log(error);
//     }
//  };

const login = async (user) => {
    try {
       const { data } = await axios.post("/api/auth/login", user);
       localStorage.setItem("token", data.token);
       setIsLoggedIn(true);
       console.log(data.message, data.token);
       navigate('/BookSearch');
    } catch (error) {
       console.error("Login failed:", error.response?.data || error.message);
       // Set an error state or show a message to the user
    }
 };
 

 const logout = () => {
    localStorage.removeItem("token");
    //set the context
    setIsLoggedIn(false)
  };

  const addToFavorites = (book) => {
    setFavoriteBooks((prevFavoriteBooks) => [...prevFavoriteBooks, book]);
    console.log('Favorite books:', favoriteBooks);
  };

 const authContextValue = {
    isLoggedIn,
    login,
    logout,
    addToFavorites,
    favoriteBooks,
 }
 return (
    <authContext.Provider value={authContextValue}>
        {children}
    </authContext.Provider>
 )
}

export default AuthenticationProvider;