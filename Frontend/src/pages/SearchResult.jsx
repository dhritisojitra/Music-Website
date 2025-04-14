import { useSearchParams } from 'react-router-dom';
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AppContent } from '../Context/AppContext';
import Ok from '../Ok';

const ResultsPage = () => {
  const { backendURL, userData } = useContext(AppContent);

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("query") || "";

  const [results, setResults] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedSongId, setSelectedSongId] = useState(null);
  const [userPlaylists, setUserPlaylists] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await axios.get(`${backendURL}/api/search/searchSong`, {
          params: { songName: searchQuery }
        });

        console.log("Search response:", res.data);
        setResults(res?.data?.songs || []);
      } catch (err) {
        console.error("Error fetching search results:", err);
        setResults([]); // fallback
      }
    };
    if (searchQuery) fetchResults();
  }, [searchQuery]);

  const openModal = async (songId) => {
    try {
      setSelectedSongId(songId);
      console.log(selectedSongId);
      
      const res = await axios.get(`${backendURL}/api/user-playlist/get/${userData.userId}`);
      console.log(res.data);
      
      setUserPlaylists(res?.data?.playlist || []);
      setShowModal(true);
    } catch (err) {
      console.error("Error fetching playlists:", err);
    }
  };

  const addToPlaylist = async (playlistID) => {
    try {
      await axios.post(`${backendURL}/api/user-playlist/addSong`, {
        playlist_ID: playlistID,
        userId: userData.userId,
        songId: selectedSongId,
      });
      setShowModal(false);
      setSelectedSongId(null);
    } catch (err) {
      console.error("Error adding to playlist:", err);
    }
  };

  return (
    <>
      <Ok />
      <div className="min-h-screen bg-gradient-to-b from-purple-950 to-black text-white">
        <div className="p-6 max-w-8xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Search Results for <span className="text-[#5044e4]">"{searchQuery}"</span>
          </h2>

          {results.length === 0 ? (
            <p className="text-center text-gray-300">No songs found.</p>
          ) : (
            <div className="w-full space-y-2">
              <div className="border-t border-gray-600 mb-4"></div>

              <div className="grid grid-cols-12 gap-x-6 font-semibold text-gray-300 text-sm pb-2 border-b border-gray-600">
                <div className="col-span-3 px-2">Song</div>
                <div className="col-span-2 px-2">Genre</div>
                <div className="col-span-2 px-2">Artist</div>
                <div className="col-span-3 px-2">Album</div>
                <div className="col-span-1 px-2 text-right">Duration</div>
                <div className="col-span-1 px-2 text-center">Link</div>
              </div>

              {results.map((song) => (
                <div
                  key={song.songID}
                  className="grid grid-cols-12 gap-x-6 items-center py-3 px-2 rounded-md hover:bg-white/10 transition"
                >
                  <div className="col-span-3 px-2 font-medium truncate flex items-center gap-2">
                    {song.songName}
                    <button
                      onClick={() => openModal(song.songID)}
                      className="text-green-400 hover:text-green-600 text-xl font-bold"
                      title="Add to Playlist"
                    >
                      +
                    </button>
                  </div>
                  <div className="col-span-2 px-2 font-medium truncate">{song.genreName}</div>
                  <div className="col-span-2 px-2 truncate text-gray-300">{song.ArtistName}</div>
                  <div className="col-span-3 px-2 truncate text-gray-300">{song.albumName}</div>
                  <div className="col-span-1 px-2 text-right text-gray-300">
                    {(song.DurationMS / 60000).toFixed(0)}:
                    {((song.DurationMS % 60000) / 1000).toFixed(0).padStart(2, '0')}
                  </div>
                  <div className="col-span-1 px-2 text-center">
                    <a
                      href={song.SpotifyURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#5044e4] hover:underline"
                    >
                      ▶
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Playlist Selection Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-gray-900 rounded-lg p-6 w-96 shadow-xl text-white">
            <h3 className="text-lg font-semibold mb-4">Select Playlist</h3>
            {userPlaylists.length === 0 ? (
              <p className="text-gray-400">No playlists found.</p>
            ) : (
              <ul className="space-y-2 max-h-60 overflow-y-auto">
                {userPlaylists.map((playlist) => (
                  <li
                    key={playlist.Playlist_ID}
                    onClick={() => addToPlaylist(playlist.Playlist_ID)}
                    className="cursor-pointer hover:bg-purple-800 px-4 py-2 rounded transition"
                  >
                    🎵 {playlist.Playlist_Name}
                  </li>
                ))}
              </ul>
            )}
            <button
              className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ResultsPage;
