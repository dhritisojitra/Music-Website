import React from "react";
import ok from "../assets/Bruno Mars.jpg";

const ArtistList = () => {

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700 p-8">
      <h2 className="text-white text-3xl font-bold text-center mb-8">Top Artists</h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {artists.map((artist, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
            <img
              src={artist.image}
              alt={artist.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h5 className="text-lg font-semibold text-gray-800">{artist.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistList;
