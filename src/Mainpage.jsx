import React, { useState } from 'react';
import { Home, Library, Disc, Search, Menu } from 'lucide-react';

const MelodifyApp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
        <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className={`bg-[#121212] w-64 p-4 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>

        <div className="flex items-center mb-6">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-white mr-4 md:hidden"
          >
            <Menu />
          </button>
          <h1 className="text-2xl font-bold text-white">Melodify</h1>
        </div>
        
        <nav className="space-y-4">
          <div className="flex items-center space-x-4 hover:bg-[#282828] p-2 rounded">
            <Home className="w-6 h-6" />
            <span>Home</span>
          </div>
          <div className="flex items-center space-x-4 hover:bg-[#282828] p-2 rounded">
            <Search className="w-6 h-6" />
            <span>Search</span>
          </div>
          <div className="flex items-center space-x-4 hover:bg-[#282828] p-2 rounded">
            <Library className="w-6 h-6" />
            <span>Your Library</span>
          </div>
        </nav>
      </div>
      
      
      <div className="flex-1 bg-[#121212] overflow-y-auto">
        {/* Top Navigation with Gradient */}
        <nav className="bg-gradient-to-r from-purple-900 to-purple-700 p-4 flex items-center justify-between">
          <div className="flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-white mr-4 md:hidden"
            >
              <Menu />
            </button>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">Home</a>
              <a href="#" className="text-white hover:text-gray-300">Library</a>
              <a href="#" className="text-white hover:text-gray-300">Playlists</a>
              <a href="#" className="text-white hover:text-gray-300">Discover</a>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search songs, artists, albums..."
                className="w-full p-2 pl-8 bg-white/10 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <Search className="absolute left-2 top-3 text-gray-300" />
            </div>
          </div>
        </nav>
        
      
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Good afternoon</h2>
          <div className="grid grid-cols-3 gap-4">
            {/* Placeholder for playlist/album cards */}
            {[1,2,3,4,5,6].map((item) => (
              <div 
                key={item} 
                className="bg-[#282828] rounded-lg p-4 flex items-center hover:bg-[#383838] transition"
              >
                <div className="w-16 h-16 bg-purple-700 mr-4"></div>
                <span>Playlist {item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default MelodifyApp;