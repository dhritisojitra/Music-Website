import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AppContent } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';

const Input = () => {

    //to get user input
    const [input,setInput] = useState("")

    const navigate = useNavigate()

    const handleSearch = async () => {
        if (!input.trim()) return;
        try {
          
          navigate(`/results?query=${encodeURIComponent(input)}`);
        } catch (err) {
          console.error("Search error:", err);
        }
      };
  return (
    <div className="relative w-full max-w-[640px] mx-auto bg-gray-100 rounded-2xl shadow-md p-1.5 transition-all duration-150 ease-in-out hover:scale-[1.02] hover:shadow-lg">
      
      {/* Search icon on the left */}
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg
          className="h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Input box */}
      <input
        type="text"
        className="w-full pl-10 pr-12 py-3 text-sm sm:text-base text-gray-700 bg-transparent rounded-lg focus:outline-none"
        placeholder="Search for songs, artists..."
        value={input}
        onChange={(e)=>{setInput(e.target.value)}}
      />

      {/* Arrow search button */}
      <button onClick={handleSearch} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black hover:bg-[#3f37c9] text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5044e4] transition">
        <svg
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Input;
