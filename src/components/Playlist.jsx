import Ok from '../Ok';
import { Play } from "lucide-react";

export default function Playlist() {
  return (
    <>
      <Ok />
      <div className="min-h-screen bg-gradient-to-b from-purple-950 to-black text-white p-8">
        <h1 className="text-3xl font-semibold mb-6">Your Playlists</h1>

        {/* Playlist List */}
        <div className="space-y-4">
          {["Chill Vibes", "Workout Mix", "Study Beats", "Throwback Hits", "Indie Essentials"].map((name, index) => (
            <div key={index} className="flex items-center justify-between bg-violet-700 h-24 rounded-lg p-6 shadow-md hover:bg-violet-800 transition">
              {/* Playlist Name */}
              <h2 className="text-white text-lg font-semibold">{name}</h2>

              {/* Play Button */}
              <button className="flex items-center justify-center w-12 h-12 bg-green-700 hover:bg-green-800 text-white rounded-full shadow-lg">
                <Play className="w-6 h-6" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
