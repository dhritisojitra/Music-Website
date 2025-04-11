import React, { useContext, useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import ProfileDropdown from "./components/ProfileDropDown";
import HooksDropdown from "./components/HooksDropdown";
import { AppContent } from "./Context/AppContext";
import axios from "axios";
import SearchBar from "../SearchBar/Input.jsx";

const Ok = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { backendURL, setUserData, setIsLoggedIn } = useContext(AppContent); // 🆕
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    try {
      await axios.post(`${backendURL}/api/auth/logout`, {}, { withCredentials: true });
  
      // 🧼 Clear frontend context state
      setUserData(null); // or false if you prefer that
      setIsLoggedIn(false); // if you're using it to manage auth guards
  
      // 🔁 Navigate to login
      navigate('/aut');
    } catch (err) {
      console.error(err.message);
      alert("Logout failed. Try again.");
    }
  };
  
  return (
    <nav className="bg-gradient-to-r from-purple-950 to-purple-700 text-white p-4 shadow-md">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between mt-2">

        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-bold whitespace-nowrap">Vibe</h1>
        </div>
        <div>
          <Input/>
        </div>
        
        {/* Search + Links */}
        <div className="flex-1 mx-4 flex justify-center items-center space-x-10">
          {/* Search */}
          <div className="hidden md:flex items-center bg-white p-2 rounded-full w-64 md:w-96">
            <Search className="text-gray-400 mx-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none text-black w-full"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 font-semibold text-lg items-center">
            <li><Link to="/home" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/my_playlists" className="hover:text-gray-300">My Playlist</Link></li>
            <li><Link to="/library" className="hover:text-gray-300">Library</Link></li>
            <li><ProfileDropdown /></li>
          </ul>
        </div>

        {/* Logout Button */}
        <div className="flex-shrink-0">
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
          >
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden ml-4" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-gray-900 p-4 mt-2 rounded-lg`}>
        <div className="flex items-center bg-gray-800 p-2 rounded-lg">
          <Search className="text-gray-400 mx-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none text-white w-full"
          />
        </div>
        <ul className="mt-4 space-y-2 text-center">
          <li><Link to="/home" className="block py-2 hover:text-gray-400">Home</Link></li>
          <li><Link to="/my_playlists" className="block py-2 hover:text-gray-400">My Playlist</Link></li>
          <li><Link to="/library" className="block py-2 hover:text-gray-400">Library</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Ok;
