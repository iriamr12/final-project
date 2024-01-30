import Lobby from "./components/Lobby";
import Register from "./components/register";
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthContext from "./components/context/AuthenticationProvider";
import { useState } from "react";
import React from "react";
import Login from "./components/Login";
import axios from "axios";
import AuthenticationProvider from "./components/context/AuthenticationProvider";
import Homepage from "./components/homepage";
import BookSearch from "./components/Booksearch";
import Navigation from "./components/Navigation";
function App(user){


    return(
        <AuthenticationProvider>
           <div>
           <Navigation />
            <Routes>
                <Route path="/" element={<Lobby/>}/>
                <Route path="/register" element={<Register />} /> 
                <Route path="/login" element={<Login />} />
                <Route path="/homepage" element={<Homepage />} />
                <Route path="/search" element={<BookSearch />} />


            </Routes>
            </div> 
            </AuthenticationProvider>
      
    ) 

}
export default App;