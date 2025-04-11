import { useLocation, useSearchParams } from 'react-router-dom';
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AppContent } from '../Context/AppContext';
import Ok from '../Ok';

const ResultsPage = () => {
  const { backendURL } = useContext(AppContent);
  
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("query") || "";

  const [results, setResults] = useState([]);

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

  return (
    <>
      <Ok />
      <div className="min-h-screen bg-gradient-to-b from-purple-950 to-black text-white">
  <div className="p-6 max-w-6xl mx-auto">
    <h2 className="text-2xl font-bold text-center mb-8">
      Search Results for <span className="text-[#5044e4]">"{searchQuery}"</span>
    </h2>

    {results.length === 0 ? (
      <p className="text-center text-gray-300">No songs found.</p>
    ) : (
      <div className="w-full space-y-2">
        <div className="border-t border-gray-600 mb-4"></div> {/* extended divider line */}

        <div className="grid grid-cols-12 gap-x-6 font-semibold text-gray-300 text-sm pb-2 border-b border-gray-600">
          <div className="col-span-4 px-2">Song</div>
          <div className="col-span-3 px-2">Artist</div>
          <div className="col-span-3 px-2">Album</div>
          <div className="col-span-1 px-2 text-right">Duration</div>
          <div className="col-span-1 px-2 text-center">Link</div>
        </div>

        {results.map((song) => (
          <div
            key={song.songID}
            className="grid grid-cols-12 gap-x-6 items-center text-sm py-3 px-2 rounded-md hover:bg-white/10 transition"
          >
            <div className="col-span-4 px-2 font-medium truncate">{song.songName}</div>
            <div className="col-span-3 px-2 truncate text-gray-300">{song.ArtistName}</div>
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
    </>
  );
  
};

export default ResultsPage;
