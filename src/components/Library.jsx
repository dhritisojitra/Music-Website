import { useState } from "react";
import Ok from "../Ok";
import { Play, Heart } from "lucide-react";

export default function Library() {
  // Sample Data
  const playlists = [
    { id: 1, name: "Chill Vibes", description: "Relax & unwind.", image: "https://i1.sndcdn.com/artworks-80mpfXSPRQwzNXQx-zKd1yg-t500x500.jpg" },
    { id: 2, name: "Workout Hits", description: "Energy-packed songs.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT40XZtPT2NmoAUV9a_pcJ07hgQWOi5kv813g&s" },
    { id: 3, name: "Throwback Classics", description: "Timeless beats.", image: "https://media.istockphoto.com/id/1372417183/vector/retro-music-vintage-vinyl-record-poster-in-retro-desigh-style-disco-party-60s-70s-80s.jpg?s=612x612&w=0&k=20&c=D-zkMVGmzs_q_AcN8zzX11fKIxRakBtrzEibYHbdGAE=" },
    { id: 4, name: "Indie Mix", description: "Best indie tracks.", image: "https://mrwallpaper.com/images/high/music-to-your-ears-enjoy-the-art-of-indie-mix-tapes-05rzfg50osu150dw.jpg" },
    { id: 5, name: "Lo-Fi Study", description: "Chill beats to study.", image: "https://i.ytimg.com/vi/CFGLoQIhmow/maxresdefault.jpg" },
  ];

  // State to track liked playlists
  const [likedPlaylists, setLikedPlaylists] = useState({});

  // Function to toggle like status
  const toggleLike = (id) => {
    setLikedPlaylists((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle like status
    }));
  };

  return (
    <>
      <Ok />
      <div className="min-h-screen bg-gradient-to-b from-purple-950 to-black text-white p-8">
        <h1 className="text-3xl font-semibold mb-6">Your Library</h1>

        {/* Scrollable Playlist Container */}
        <div className="space-y-4 overflow-y-auto max-h-[75vh] scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
          {playlists.map((playlist) => (
            <div key={playlist.id} className="flex items-center justify-between bg-violet-800 rounded-lg p-4 shadow-md hover:bg-violet-700 transition">
              
              {/* Playlist Image */}
              <img src={playlist.image} alt={playlist.name} className="w-16 h-16 rounded-md object-cover" />

              {/* Playlist Info */}
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold">{playlist.name}</h2>
                <p className="text-sm text-gray-300">{playlist.description}</p>
              </div>

              {/* Icons */}
              <div className="flex gap-4">
                {/* Like Button */}
                <button 
                  className="p-2 rounded-full hover:bg-gray-800 transition" 
                  onClick={() => toggleLike(playlist.id)}
                >
                <Heart 
                    className={`w-5 h-5 transition-all ${
                    likedPlaylists[playlist.id] 
                    ? "fill-red-500 text-red-500"  
                    : "fill-none text-white"     
                }`} 
                />
</button>

                {/* Play Button */}
                <button className="p-2 rounded-full bg-green-700 hover:bg-green-800 shadow-lg">
                  <Play className="w-5 h-5 text-white" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </>
  );
}
