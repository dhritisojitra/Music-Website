import React, { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Link } from "react-router-dom";
import ProfileDropdown from "./components/ProfileDropDown";
import HooksDropdown from "./components/HooksDropdown";

const Ok = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-950 to-purple-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold whitespace-nowrap">Vibe</h1>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-white p-2 rounded-full w-64 md:w-126">
          <Search className="text-gray-400 mx-2" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-transparent focus:outline-none text-black w-full"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-semibold text-lg">
          <li className="hover:text-gray-400 cursor-pointer">
            <Link to="/home" className="text-inherit" style={{ textDecoration: "none", color: "inherit" }}>Home</Link>
          </li>
          <li className="hover:text-gray-400 cursor-pointer">
            <Link to="/my_playlists" className="text-inherit" style={{ textDecoration: "none", color: "inherit" }}>My Playlist</Link>
          </li>          
          <li className="hover:text-gray-400 cursor-pointer">
            <Link to="/library" className="text-inherit" style={{ textDecoration: "none", color: "inherit" }}>Library</Link>
          </li>
          <li><ProfileDropdown /></li>
          <li><HooksDropdown /></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} bg-gray-900 p-4 mt-2 rounded-lg`}
      >
        <div className="flex items-center bg-gray-800 p-2 rounded-lg">
          <Search className="text-gray-400 mx-2" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-transparent focus:outline-none text-white w-full"
          />
        </div>
        <ul className="mt-4 space-y-2 text-center">
          <li>
            <Link to="/home" className="block py-2 hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link to="/my_playlists" className="block py-2 hover:text-gray-400">My Playlist</Link>
          </li>          
          <li>
            <Link to="/library" className="block py-2 hover:text-gray-400">Library</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Ok;
