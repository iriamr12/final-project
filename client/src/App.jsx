import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthenticationProvider from "./components/context/AuthenticationProvider";
import Lobby from "./components/Lobby";
import Register from "./components/Register";
import Login from "./components/Login";
import Homepage from "./components/homepage";
import BookProfile from "./BookProfile";
import BookInfo from "./components/BookInfo";

function App(user) {
  return (
    <AuthenticationProvider>
      <div>
        <Routes>
          <Route path="/" element={<Lobby />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />
          {/* <Route path="/book/:id" element={<BookProfile />} />
          <Route path="/book-info/:id" element={<BookInfo />} /> */}
        </Routes>
      </div>
    </AuthenticationProvider>
  );
}

export default App;
