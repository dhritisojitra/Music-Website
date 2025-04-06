import React, { useContext, useEffect, useState } from "react";
import { PlusCircle, X, Music, Headphones } from "lucide-react";
import { AppContent } from "../Context/AppContext";
import axios from "axios";

const AddPlaylistSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playlist, setPlaylist] = useState("");
  const [fetchedPlaylists, setFetchedPlaylists] = useState([]);
  const { backendURL, userData } = useContext(AppContent);

  // Fetch playlists of the user
  const fetchPlaylists = async () => {
    if (!userData?.userId) {
      setFetchedPlaylists([]); 
      return;
    }
     
    try {
      const response = await axios.get(`${backendURL}/api/user-playlist/get/${userData.userId}`);
      setFetchedPlaylists(response.data.playlist || []);
    } catch (err) {
      console.error("Failed to fetch playlists:", err);
    }
  };

  useEffect(() => {
    fetchPlaylists();
  }, [userData, backendURL]);

  // Create a new playlist
  const handleCreatePlaylist = async () => {
    if (!playlist.trim()) return;

    const newPlaylist = playlist.trim();
    const userId = userData?.userId;

    setPlaylist("");
    setIsModalOpen(false);

    try {
      await axios.post(`${backendURL}/api/user-playlist/create`, {
        playlistName: newPlaylist,
        userId,
      });

      // Refresh the playlist list after creation
      fetchPlaylists();
    } catch (err) {
      console.error("Failed to create playlist:", err);
    }
  };

  // Generate random gradient backgrounds for playlists
  const getRandomGradient = () => {
    const gradients = [
      "from-pink-500 to-purple-700",
      "from-blue-500 to-indigo-700",
      "from-green-500 to-emerald-700",
      "from-yellow-500 to-orange-700",
      "from-purple-500 to-indigo-700",
      "from-red-500 to-pink-700",
      "from-teal-500 to-cyan-700"
    ];
    return gradients[Math.floor(Math.random() * gradients.length)];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Sidebar-like header */}
      <div className="flex">
        {/* Main content */}
        <div className="flex-1 p-8">
          {/* Header with glass effect */}
          <div className="mb-8 backdrop-blur-md bg-black/30 rounded-xl p-6 shadow-lg">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Your Playlists</h3>
                <p className="text-gray-400 mt-1">Create and manage your music collections</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-4 py-2 rounded-full font-medium transition-all shadow-lg hover:shadow-pink-500/20"
              >
                <PlusCircle size={18} />
                <span>Create Playlist</span>
              </button>
            </div>
          </div>

          {/* Playlist Display */}
          {fetchedPlaylists.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-96 backdrop-blur-md bg-black/20 rounded-xl p-8">
              <Headphones size={64} className="text-purple-400 mb-4" />
              <h4 className="text-2xl font-semibold mb-2">No playlists yet</h4>
              <p className="text-gray-400 mb-6 text-center max-w-md">Create your first playlist to start organizing your favorite tracks</p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-6 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-pink-500/20"
              >
                <PlusCircle size={18} />
                <span>Create Playlist</span>
              </button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {fetchedPlaylists.map((playlist, index) => {
                const gradient = getRandomGradient();
                return (
                  <div
                    key={playlist.Playlist_ID}
                    className="bg-black/40 backdrop-blur-sm hover:bg-black/60 border border-gray-800 rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-purple-500/10 hover:scale-105 cursor-pointer group"
                  >
                    <div className={`bg-gradient-to-br ${gradient} w-full h-40 flex items-center justify-center relative`}>
                      <Music size={40} className="text-white/70" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/40 flex items-center justify-center transition-all">
                        <button className="bg-green-500 rounded-full p-3 shadow-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="text-lg font-bold truncate">{playlist.Playlist_Name}</h4>
                      <p className="text-sm text-gray-400 mt-1">
                        {index % 3 === 0 ? "Your Mix" : index % 2 === 0 ? "Personal Collection" : "Favorites"}
                      </p>
                    </div>
                  </div>
                );
              })}
              {/* Add playlist card */}
              <div
                onClick={() => setIsModalOpen(true)}
                className="bg-black/20 backdrop-blur-sm border border-gray-800 border-dashed rounded-xl overflow-hidden transition-all hover:bg-black/40 cursor-pointer flex flex-col items-center justify-center h-full min-h-64"
              >
                <PlusCircle size={40} className="text-purple-400 mb-2" />
                <p className="text-gray-400 font-medium">Add New Playlist</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal for creating playlist - with improved styling */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div 
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 w-96 shadow-xl border border-purple-900/50 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Create New Playlist</h2>
              <button
                className="text-gray-400 hover:text-white bg-gray-800/50 hover:bg-gray-700/70 rounded-full p-2 transition-colors"
                onClick={() => setIsModalOpen(false)}
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-400 text-sm font-medium mb-2">Playlist Name</label>
              <input
                type="text"
                placeholder="My Awesome Mix"
                value={playlist}
                onChange={(e) => setPlaylist(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-800/70 text-white placeholder-gray-500 border border-gray-700 focus:border-purple-500 focus:ring focus:ring-purple-500/20 focus:outline-none transition-all"
                autoFocus
              />
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreatePlaylist}
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg font-medium transition-all disabled:opacity-50"
                disabled={!playlist.trim()}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddPlaylistSection;