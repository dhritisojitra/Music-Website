import { useState, useEffect, useContext } from "react";
import Ok from "../Ok";
import axios from "axios";
import { AppContent } from "../Context/AppContext";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function Library() {
  const [playlists, setPlaylists] = useState([]);
  const { backendURL, userData } = useContext(AppContent);

  // Load liked playlists from localStorage
  const [likedPlaylists, setLikedPlaylists] = useState(() => {
    const stored = localStorage.getItem("likedPlaylists");
    return stored ? JSON.parse(stored) : [];
  });

  // Function to toggle like/unlike
  const toggleLike = (playlistId) => {
    const updatedLikes = likedPlaylists.includes(playlistId)
      ? likedPlaylists.filter((id) => id !== playlistId)
      : [...likedPlaylists, playlistId];

    setLikedPlaylists(updatedLikes);
    localStorage.setItem("likedPlaylists", JSON.stringify(updatedLikes));
  };

  const fetchPlaylists = async () => {
    if (!userData?.userId) {
      setPlaylists([]);
      return;
    }
    try {
      const response = await axios.get(`${backendURL}/api/user-playlist/get/${userData.userId}`);
      setPlaylists(response.data.playlist || []);
    } catch (err) {
      console.error("Failed to fetch playlists:", err);
    }
  };

  useEffect(() => {
    if (userData?.userId) {
      fetchPlaylists();
    }
  }, [userData, backendURL]);

  return (
    <>
      <Ok />
      <div className="p-4 min-h-screen bg-gradient-to-b from-purple-950 to-black text-white">
        <h2 className="text-xl font-bold mb-4">Your Playlists</h2>
        {playlists.length === 0 ? (
          <p>No playlists found</p>
        ) : (
          <ul className="space-y-4">
            {playlists.map((playlist) => (
              <li
                key={playlist.Playlist_ID}
                className="flex justify-between items-center border border-purple-500/30 p-4 rounded-xl bg-white/5 backdrop-blur-md shadow-lg transition hover:scale-[1.02]"
              >
                <div>
                  <div className="text-lg font-semibold">{playlist.Playlist_Name}</div>
                  <div className="text-sm text-gray-300">ID: {playlist.Playlist_ID}</div>
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => toggleLike(playlist.Playlist_ID)}
                >
                  {likedPlaylists.includes(playlist.Playlist_ID) ? (
                    <AiFillHeart size={28} className="text-red-500" />
                  ) : (
                    <AiOutlineHeart size={28} className="text-gray-400 hover:text-red-400" />
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Library;
