import { useContext, useState, useEffect } from "react";
import { AppContent } from "../Context/AppContext";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { ExternalLink, Trash2 } from "lucide-react";
import Ok from "../Ok";

const PlaylistSongs = () => {
  const { backendURL, userData } = useContext(AppContent);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("query") || ""; // This has both playlist name and ID

  const [playlistName, playlistID] = searchQuery.split(":"); // Split to get both playlist name and ID

  const [songs, setSongs] = useState([]);

  const fetchResults = async () => {
    try {
      const res = await axios.get(
        `${backendURL}/api/user-playlist/getPlaylist/${userData.userId}/${playlistName}`
      );
      console.log("response:", res.data);
      setSongs(res?.data?.songs || []);
    } catch (err) {
      console.error("Error fetching song results:", err);
      setSongs([]);
    }
  };

  useEffect(() => {
    if (userData?.userId) fetchResults();
  }, [userData, playlistID]);

  // Adding playlist song logic
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // First, we search the song
  const handleSearch = async () => {
    try {
      const res = await axios.get(`${backendURL}/api/search/searchSong`, {
        params: { songName: searchText }
      });
      setSearchResults(res?.data?.songs || []);
    } catch (err) {
      console.error(err);
    }
  };

  // When the user clicks a song from the search results, we add it to the playlist
  const handleAddSong = async (songID) => {
    try {
      console.log(playlistID, userData.userId, songID);

      await axios.post(`${backendURL}/api/user-playlist/addSong`, {
        playlist_ID: playlistID,
        userId: userData.userId,
        songId: songID
      });

      // After adding the song, refresh the playlist
      fetchResults();
      setShowSearchBar(false);  // Hide the search bar after adding song
      setSearchText(""); // Clear search text
    } catch (err) {
      console.error(err);
    }
  };


  //deleting from playlist

  const handleDelete = async (e) => {
    try{
      await axios.delete(`${backendURL}/api/user-playlist/deleteSong/${playlistID}`, {
        data: {
          playlist_Name: playlistName,
          userId: userData.userId,
          songId: e
        }
      });
      fetchResults();
      setShowSearchBar(false);  // Hide the search bar after adding song
      setSearchText(""); // Clear search text
      
    }catch(err){
      console.error(err);
    }

  }


  return (
    <>
      <Ok />
      <div className="min-h-screen bg-gradient-to-b from-purple-950 to-black text-white p-8">
        <div className="flex flex-col items-center gap-4 mb-10">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
              🎵 Playlist: {decodeURIComponent(playlistName)}
            </h2>

            <button
              className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-md transition duration-300 ease-in-out"
              onClick={() => setShowSearchBar(!showSearchBar)}
            >
              + Add Song
            </button>
          </div>

          {showSearchBar && (
            <div>
              <input
                type="text"
                placeholder="Search songs..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="mt-2 px-4 py-2 w-80 rounded-lg bg-black border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
              <button
                onClick={handleSearch}
                className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-md transition duration-300 ease-in-out"
              >
                Search
              </button>

              {searchResults.length > 0 && (
                <div className="mt-2 w-80 bg-black border border-gray-600 rounded-lg shadow-md max-h-60 overflow-y-auto">
                  {searchResults.map((song) => (
                    <div
                      key={song.songID}
                      className="p-2 text-white hover:bg-purple-800 cursor-pointer text-sm"
                      onClick={() => handleAddSong(song.songID)}
                    >
                      🎵 {song.songName} - <span className="text-gray-400">{song.ArtistName}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {songs.length === 0 ? (
          <div className="text-center text-gray-400">No songs in this playlist yet.</div>
        ) : (
          <div className="w-full">
            {/* Header Row */}
            <div className="grid grid-cols-6 text-gray-400 border-b border-gray-700 pb-4 mb-4 mt-5 text-sm font-semibold uppercase tracking-wider">
              <div>#</div>
              <div>Title</div>
              <div>Album</div>
              <div>Artist</div>
              <div>Duration</div>
              <div>Link</div>
            </div>

            {/* Song Rows */}
            {songs.map((song, index) => (
              <div
                key={index}
                className="grid grid-cols-6 items-center py-4 px-4 rounded-xl bg-black/20 hover:bg-purple-900/40 hover:shadow-md transition-all duration-300 ease-in-out"
              >
                <div className="text-gray-400 text-lg">{index + 1}</div>
                <div className="font-medium text-white text-lg">{song.songName}</div>
                <div className="text-gray-300 text-lg">{song.albumName}</div>
                <div className="text-gray-300 text-lg">{song.ArtistName}</div>
                <div className="text-gray-400 text-lg">
                  {Math.floor(song.DurationMS / 60000)}:
                  {(Math.floor((song.DurationMS % 60000) / 1000))
                    .toString()
                    .padStart(2, "0")}
                </div>
                <div className="flex items-center gap-20">
                  <a
                    href={song.SpotifyURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-pink-400 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <button
                  onClick={() => handleDelete(song.songID)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                  >
                  <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default PlaylistSongs;
