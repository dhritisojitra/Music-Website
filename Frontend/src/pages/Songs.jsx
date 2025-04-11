import React, { useState } from 'react';
import axios from 'axios';

function Songs() {
  const [data, setIsData] = useState('');
  const [backData, setBackData] = useState([]);

  const HandleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/searchForNow?songName=${data}`); // GET request with query parameter
      setBackData(response.data.songs);
    } catch (err) {
      console.error('Error fetching songs:', err);
    }
  };

  return (
    <>
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md m-2">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="text-black flex-1 bg-purple-300 p-2 rounded-md"
            value={data}
            onChange={(e) => {
              setIsData(e.target.value);
            }}
          />
          <button onClick={HandleSearch}>Search</button>
          <div>
            <h1>Search results:</h1>
            <ul>
              {backData && backData.map((song) => (
                <li key={song.songID}>Song ID: {song.songID}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Songs;