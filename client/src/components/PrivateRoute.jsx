/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import {authContext} from "../context/AuthenticationProvider.jsx";
import { useContext } from "react";
import { Navigate } from 'react-router-dom';

//in React you don't need to pass children as a prop to have access to it
// it will be automatically there inside the children var
export default function PrivateRoute({children}) {
  //check if auth.isLoggedIn is true to check if the user is loggedIn
  const auth = useContext(authContext);
  //if the useer id logged in,return the children
  //else navigate to the login page
  return auth.isLoggedIn ? children : <Navigate to="/"/>
}
