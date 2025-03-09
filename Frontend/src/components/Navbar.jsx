import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Music Website</h1>
            <div>
                <a href="#">Home</a> 
                <a href="#">Genre</a> 
                <a href="#">Artist</a> 
                <a href="#">Playlist</a>
                <a href="#">Login</a>
                <a href="#">Sign Up</a>

            </div>
        </nav>
    );
};

export default Navbar;