import React, { useContext, useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import ProfileDropdown from "./components/ProfileDropDown";
import HooksDropdown from "./components/HooksDropdown";
import { AppContent } from "./Context/AppContext";
import axios from "axios";
import Input from "./components/SearchBar";
import echoLogo from "./assets/echo.png";

const Ok = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // State to manage theme
  const { backendURL, setUserData, setIsLoggedIn } = useContext(AppContent);
  const navigate = useNavigate();

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      setIsDarkMode(true); // Default to dark mode
    }
  }, []);

  // Update theme in localStorage and body class on theme toggle
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const handleLogout = async () => {
    try {
      await axios.post(`${backendURL}/api/auth/logout`, {}, { withCredentials: true });

      setUserData(null);
      setIsLoggedIn(false);

      navigate("/auth");
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
      <img src={echoLogo} alt="echo logo" className="h-30" />
      </div>

        {/* Search + Links */}
        <div className="flex-1 mx-4 flex justify-center items-center space-x-10">
          <Input />

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-12 font-semibold text-lg items-center">
            <li><Link to="/home" className="text-white no-underline text-decoration-none hover:text-gray-300">Home</Link></li>
            <li><Link to="/library" className="text-white no-underline text-decoration-none hover:text-gray-300">Library</Link></li>
            <li><ProfileDropdown /></li>
          </ul>
        </div>

        {/* Logout and Theme Toggle */}
        <div className="flex items-center">
          {/* Logout Button */}
          <div className="flex-shrink-0 -mt-4 mr-4">
            <button
              onClick={handleLogout}
              className="px-2 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
            >
              Logout
            </button>
          </div>
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
          <li><Link to="/library" className="block py-2 hover:text-gray-400">Library</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Ok;