import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Navigation from "./components/Navigation";
import Register from "./components/Register";
import Login from "./components/login";
import BookSearch from "./components/Booksearch";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<BookSearch/>} />
      </Routes>
    </>
  );
}

export default App;