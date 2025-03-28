import React, { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import {Link} from "react-router-dom";
import ProfileDropdown from "./components/ProfileDropDown";
import ArtistCard from "./components/ArtistCard";

const Ok = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-950 to-purple-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold">Vibe</h1>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-white p-2 rounded-full w-150">
          <Search className="text-gray-400 mx-2" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-transparent focus:outline-none text-black"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-9 font-bold text-lg mt-3">
        <li className="hover:text-gray-400 cursor-pointer">
        <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>Home</Link>
        </li>

        <li className="hover:text-gray-400 cursor-pointer">
        <Link to="/my_playlists" style={{ textDecoration: "none", color: "inherit" }}>My Playlist</Link>
        </li>          
        <li className="hover:text-gray-400 cursor-pointer">
        <Link to="/Library" style={{ textDecoration: "none", color: "inherit"}}>Library</Link>
        </li>
        <li><ProfileDropdown/></li>
        </ul>

















        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-gray-800 p-4`}>
        <input 
          type="text" 
          placeholder="Search..." 
          className="bg-gray-700 p-2 rounded w-full text-white"
        />
        <ul className="mt-4 space-y-2">
          <li><a href="#" className="block hover:text-gray-400">Home</a></li>
         
        </ul>
      </div>
    </nav>
  );
};

export default Ok;
