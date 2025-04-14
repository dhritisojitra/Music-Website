import { useContext, useState, useEffect } from "react";
import { AppContent } from "../Context/AppContext";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { ExternalLink, Trash2 } from "lucide-react";
import Ok from "../Ok";

const PlaylistSongs = () => {
  const { backendURL, userData } = useContext(AppContent);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("query") || "";
  const [playlistName, playlistID] = searchQuery.split(":");

  const [songs, setSongs] = useState([]);
  const [recommendedSongs, setRecommendedSongs] = useState([]);

  const fetchResults = async () => {
    try {
      const res = await axios.get(
        `${backendURL}/api/user-playlist/getPlaylist/${userData.userId}/${playlistName}`
      );
      setSongs(res?.data?.songs || []);
    } catch (err) {
      console.error("Error fetching song results:", err);
      setSongs([]);
    }
  };

  const fetchRecommendedSongs = async () => {
    try {
      const res = await axios.get(`${backendURL}/api/user-playlist/getRecommended/${userData.userId}`)

      if (res.data.success) {
        setRecommendedSongs(res.data.recommendations || []);
      }
    } catch (err) {
      console.error("Error fetching recommended songs:", err);
    }
  };

  useEffect(() => {
    if (userData?.userId) {
      fetchResults();
      fetchRecommendedSongs();
    }
  }, [userData, playlistID]);

  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await axios.get(`${backendURL}/api/search/searchSong`, {
        params: { songName: searchText },
      });
      setSearchResults(res?.data?.songs || []);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddSong = async (songID) => {
    try {
      await axios.post(`${backendURL}/api/user-playlist/addSong`, {
        playlist_ID: playlistID,
        userId: userData.userId,
        songId: songID,
      });

      fetchResults();
      fetchRecommendedSongs();
      setShowSearchBar(false);
      setSearchText("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (songID) => {
    try {
      await axios.delete(`${backendURL}/api/user-playlist/deleteSong/${playlistID}`, {
        data: {
          playlist_Name: playlistName,
          userId: userData.userId,
          songId: songID,
        },
      });

      fetchResults();
    } catch (err) {
      console.error(err);
    }
  };

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
                className="ml-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-md transition"
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
            <div className="grid grid-cols-6 text-gray-400 border-b border-gray-700 pb-4 mb-4 mt-5 text-sm font-semibold uppercase tracking-wider">
              <div>#</div>
              <div>Title</div>
              <div>Album</div>
              <div>Artist</div>
              <div>Duration</div>
              <div>Link</div>
            </div>

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
                <div className="flex items-center gap-4">
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

        {/* Recommended Songs Section */}
        {recommendedSongs.length > 0 && (
          <div className="mt-10">
            <h3 className="text-2xl font-bold mb-4 text-pink-400">✨ Recommended Songs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recommendedSongs.map((song, idx) => (
                <div
                  key={song.songID}
                  className="flex justify-between items-center p-4 bg-black/30 rounded-lg hover:bg-purple-900/30 transition-all"
                >
                  <div>
                    <div className="text-lg font-semibold text-white">{song.songName}</div>
                    <div className="text-sm text-gray-400">{song.ArtistName}</div>
                    <div className="text-sm text-gray-500">
                      Released: {new Date(song.AlbumReleaseDate).toDateString()}
                    </div>
                  </div>
                  <button
                    onClick={() => handleAddSong(song.songID)}
                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-full text-sm transition"
                  >
                    + Add
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PlaylistSongs;
