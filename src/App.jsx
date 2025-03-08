import { useState } from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import Songs from "./pages/Songs";
import SignUp from "./pages/SignUp";
import Artist from "./pages/Artist";

function App(){
  return (
    <div>
      <Navbar />
        <h1> Welcome to the Music Website </h1>
    </div>
  );
};

export default App;
