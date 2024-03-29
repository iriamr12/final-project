import React from "react";
import { Routes, Route } from "react-router-dom";
// import AuthenticationProvider from "./components/context/AuthenticationProvider";
import Lobby from "./components/Lobby";
import Register from "./components/register";
import AuthContext from "./components/context/AuthenticationProvider";
import { useState } from "react";
import Login from "./components/Login";
import AuthenticationProvider from "./components/context/AuthenticationProvider";
import Homepage from "./components/homepage";
import BookSearch from "./components/Booksearch";
import Navigation from "./components/Navigation";
import BookProfile from "./components/BookProfile.jsx";
import {BookViewer} from "./components/BookViewer.jsx";
import UserProfile from "./components/UserProfile.jsx";


function App(user){


    return(
        <AuthenticationProvider>
           <div>
            {/* TODO this is being disabled for now, as it blocks all the other components. */}
            <Navigation />
            <Routes>
                <Route path="/" element={<Lobby/>}/>
                <Route path="/register" element={<Register />} /> 
                <Route path="/login" element={<Login />} />
                <Route path="/homepage" element={<Homepage />} />
                <Route path="/booksearch" element={<BookSearch />} />
                <Route path="/bookprofile" element={<BookProfile />} />
                <Route path="/bookviewer/:id" element={<BookViewer />} />
                <Route path="/userProfile" element={<UserProfile />} />
            </Routes>
            </div> 
        </AuthenticationProvider>
      
    ) 

}

export default App;
