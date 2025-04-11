
import { useState, useEffect, useContext } from "react";
import Ok from "../Ok";
import axios from "axios";
import { AppContent } from "../Context/AppContext";

function Library() {
  const [playlists, setPlaylists] = useState([]);
  const { backendURL, userData } = useContext(AppContent);

  const fetchPlaylists = async () => {
    if (!userData?.userId) {
      setPlaylists([]);
      return;
    }
    try {
      const response = await axios.get(`${backendURL}/api/user-playlist/get/${userData.userId}`);
      setPlaylists(response.data.playlist || []);
      console.log(playlists);
      
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
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Your Playlists</h2>
        {playlists.length === 0 ? (
          <p>No playlists found</p>
        ) : (
          <ul className="space-y-2">
            {playlists.map((playlist) => (
              <li
                key={playlist.Playlist_ID}
                className="border p-2 rounded shadow-sm bg-white hover:bg-gray-50 transition"
              >
                <div className="font-medium">{playlist.Playlist_Name}</div>
                <div className="text-sm text-gray-500">ID: {playlist.Playlist_ID}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Library;
