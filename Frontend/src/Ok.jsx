<<<<<<< Updated upstream
import React, { useState } from "react";
import { Menu, X, Search, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";
=======
import React, { useContext, useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
>>>>>>> Stashed changes
import ProfileDropdown from "./components/ProfileDropDown";
import HooksDropdown from "./components/HooksDropdown";
import { AppContent } from "./Context/AppContext";
import axios from "axios";



const Ok = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPlaylistDropdown, setShowPlaylistDropdown] = useState(false);
  const [playlists, setPlaylists] = useState([]);

  const handleCreatePlaylist = () => {
    const newPlaylist = {
      id: playlists.length + 1,
      name: `Playlist ${playlists.length + 1}`,
    };
    setPlaylists([...playlists, newPlaylist]);
  };

  const { backendURL } = useContext(AppContent)
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      await axios.post(`${backendURL}/api/auth/logout`,{},{withCredentials:true})
      navigate('/')

    } catch (err) {
      console.log(err);
      alert("Logout failed")
    }
  }

  return (
<<<<<<< Updated upstream
    <>
      {/* NAVBAR */}
      <nav className="bg-gradient-to-r from-purple-950 to-purple-700 text-white p-4 z-10 relative">
        <div className="container mx-auto flex justify-between items-center flex-wrap">
          <h1 className="text-2xl font-bold whitespace-nowrap">Vibe</h1>

          {/* Search */}
          <div className="hidden md:flex items-center bg-white p-2 rounded-full w-64 md:w-126">
            <Search className="text-gray-400 mx-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none text-black w-full"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 font-semibold text-lg items-center">
            <li>
              <Link to="/home" className="hover:text-gray-400">Home</Link>
            </li>

            {/* Playlist Dropdown */}
            <li className="relative">
              <button
                onClick={() => setShowPlaylistDropdown(!showPlaylistDropdown)}
                className="hover:text-gray-400"
              >
                My Playlist ▾
              </button>
              {showPlaylistDropdown && (
                <ul className="absolute bg-purple-900 mt-2 rounded shadow-lg text-white w-40 p-2 z-20">
                  <li
                    onClick={handleCreatePlaylist}
                    className="hover:bg-purple-700 px-3 py-2 rounded cursor-pointer"
                  >
                    ➕ Create New Playlist
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/library" className="hover:text-gray-400">Library</Link>
            </li>
            <li><ProfileDropdown /></li>
            <li><HooksDropdown /></li>
          </ul>

          {/* Mobile Menu Icon */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-gray-900 p-4 mt-2 rounded-lg">
            <div className="flex items-center bg-gray-800 p-2 rounded-lg">
              <Search className="text-gray-400 mx-2" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent focus:outline-none text-white w-full"
              />
            </div>
            <ul className="mt-4 space-y-2 text-center">
              <li><Link to="/home">Home</Link></li>
              <li onClick={handleCreatePlaylist} className="cursor-pointer">Create Playlist</li>
              <li><Link to="/library">Library</Link></li>
            </ul>
          </div>
        )}
      </nav>

      {/* MAIN CONTENT */}
      <div className="min-h-screen bg-gradient-to-b from-purple-950 to-black text-white p-8">
        {/* Create Playlist Section */}
        <div className="mb-6 flex items-center space-x-4">
          <h3 className="text-2xl font-semibold">Create Playlist</h3>
          <PlusCircle
            className="cursor-pointer text-green-400 hover:text-green-300"
            onClick={handleCreatePlaylist}
          />
        </div>

        {/* Playlist Cards Section */}
        {playlists.length === 0 ? (
          <div className="text-lg text-gray-200">
            <p className="mb-2">Looks like you have no playlists created.</p>
            <p className="flex items-center gap-2">
              Create one now{" "}
              <PlusCircle
                className="inline-block text-green-400 cursor-pointer"
                onClick={handleCreatePlaylist}
              />
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {playlists.map((playlist) => (
              <div
                key={playlist.id}
                className="bg-black border border-purple-500 rounded-xl p-4 text-center"
              >
                <div className="w-32 h-32 mx-auto rounded-full border-2 border-purple-500 mb-4"></div>
                <h4 className="text-xl font-bold">{playlist.name}</h4>
                <p className="text-sm text-gray-300">Your Genre</p>
                <div className="flex justify-center gap-4 mt-4 text-blue-400">
                  <i className="fas fa-globe"></i>
                  <i className="fas fa-music"></i>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
=======
    <nav className="bg-gradient-to-r from-purple-950 to-purple-700 text-white p-4 ">
      <div className="container mx-auto flex justify-between items-center flex-wrap mt-2">

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

          <li><button className=" px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
            onClick={handleLogout}>
            Logout
          </button></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
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
>>>>>>> Stashed changes
  );
};

export default Ok;
