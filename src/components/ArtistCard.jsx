import React from 'react';
import { Globe, Music } from "lucide-react";

export default function ArtistCard() {
  // Sample Artist Data
  const artists = [
    {
      id: 1,
      name: "Bruno Mars",
      genre: "Pop, R&B, Funk",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB_vVgXrZQSZ0cry_oqk2pJ9fXY-DjYxdenA&s",
    },
    {
      id: 2,
      name: "Lana Del Rey",
      genre: "Alternative, Indie Pop, Dream Pop",
      image: "https://i.scdn.co/image/ab6761610000e5ebb99cacf8acd5378206767261",
    },
    {
      id: 3,
      name: "Arctic Monkeys",
      genre: "Indie Rock, Alternative Rock, Post-Punk Revival",
      image: "https://cdn-images.dzcdn.net/images/cover/64e54e307bd5e2bdb27ffeb662fd910d/0x1900-000000-80-0-0.jpg"
    },

    {
      id: 4,
      name: "Harry Styles",
      genre: "Pop, Soft Rock, Britpop",
      image: "https://m.media-amazon.com/images/M/MV5BMTUxMzU2MTk1OF5BMl5BanBnXkFtZTgwNzg4NjAwMzI@._V1_FMjpg_UX1000_.jpg",
    },

    {
      id: 5,
      name: "Arijit Singh",
      genre: "Bollywood, Playback Singing, Indian Classical",
      image: "https://media.insider.in/image/upload/c_crop,g_custom/v1728462701/yiwwlrbe78ahhohjjmum.jpg",
    },

    {
      id: 6,
      name: "Armaan Malik",
      genre: "Pop, Bollywood, R&B",
      image: "https://variety.com/wp-content/uploads/2022/07/Armaan-Malik.jpg?w=1000&h=564&crop=1",
    },

    {
      id: 7,
      name: "Shaan",
      genre: "Bollywood, Pop, Playback Singing",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4OGwBTIU8KWMakE89pu3ZXPn3W1og4MejgQ&s",
    },

    {
      id: 8,
      name: "The Weeknd",
      genre: "R&B, Pop, Alternative R&B",
      image: "https://www.latingrammy.com/_next/image?url=https%3A%2F%2Fi8.amplience.net%2Fi%2Fnaras%2FMI0005556888-MN0002674162&w=3840&q=75",
    },

    {
      id: 9,
      name: "Shawn Mendes",
      genre: "Pop, Folk Pop, Acoustic",
      image: "https://people.com/thmb/10n-FRRqJYXcr4WeXMmKsF0-kXU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/shawn-mendes-1522c05b2a3d49b58bb758dd111bfa5d.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-950 to-black p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-32">
        {artists.map((artist) => (
          <div
            key={artist.id}
            className="bg-black bg-opacity-30 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-white border border-white/20 transition transform hover:scale-105 hover:border-purple-500"
          >
            {/* Artist Image */}
            <img
              src={artist.image}
              alt={artist.name}
              className="w-52 h-52 mx-auto rounded-full object-cover border-4 border-purple-500"
            />

            {/* Artist Details */}
            <h2 className="text-xl font-bold text-center mt-4">{artist.name}</h2>
            <p className="text-center text-sm text-gray-300">{artist.genre}</p>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 mt-4">
              <a href="#" className="hover:text-purple-400 transition-transform transform hover:scale-110">
                <Globe className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-purple-400 transition-transform transform hover:scale-110">
                <Music className="w-6 h-6" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
