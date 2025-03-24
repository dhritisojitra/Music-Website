import React from "react";

const HomePage = () => {
  const artists = [
    { name: "Harry Styles", image: "https://via.placeholder.com/100" },
    { name: "The Weeknd", image: "https://via.placeholder.com/100" },
    { name: "Bruno Mars", image: "https://via.placeholder.com/100" },
    { name: "Shawn Mendes", image: "https://via.placeholder.com/100" },
    { name: "Post Malone", image: "https://via.placeholder.com/100" },
  ];

  const cards = [
    { title: "Card 1", description: "Description 1" },
    { title: "Card 2", description: "Description 2" },
    { title: "Card 3", description: "Description 3" },
    { title: "Card 4", description: "Description 4" },
    { title: "Card 5", description: "Description 5" },
    { title: "Card 6", description: "Description 6" },
  ];

  return (
    <div className="bg-gradient-to-b from-[#1e0a3c] to-[#0d0d0d] min-h-screen text-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-6 bg-[#1e0a3c]">
        <h1 className="text-2xl font-bold">Melodify</h1>
        <div className="space-x-6">
          <a href="#" className="hover:text-purple-400">Home</a>
          <a href="#" className="hover:text-purple-400">Library</a>
          <a href="#" className="hover:text-purple-400">Playlists</a>
          <a href="#" className="hover:text-purple-400">Discover</a>
        </div>
        <input
          type="text"
          placeholder="Search songs, artists, albums..."
          className="rounded-full px-4 py-2 text-black"
        />
      </nav>

      {/* Artists Section */}
      <section className="p-8">
        <h2 className="text-3xl font-bold mb-6">Top Artists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artists.map((artist, index) => (
            <div
              key={index}
              className="bg-[#2a1a4b] rounded-2xl shadow-lg flex items-center p-4 gap-4 hover:bg-[#3a2b5c] transition"
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold">{artist.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Good Afternoon Cards Section */}
      <section className="p-8 bg-transparent">
        <h2 className="text-3xl font-bold mb-6">Good Afternoon</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#1f1f1f] rounded-xl p-6 shadow-lg hover:bg-[#292929] transition"
            >
              <h4 className="text-xl font-semibold mb-2">{card.title}</h4>
              <p className="mb-4 text-sm text-gray-300">{card.description}</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                Go somewhere
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Made for You */}
      <section className="p-8">
        <h2 className="text-3xl font-bold mb-6">Made for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add more cards or playlist sections here */}
          <div className="bg-[#1f1f1f] rounded-xl p-6 shadow-lg hover:bg-[#292929] transition">
            <h4 className="text-xl font-semibold mb-2">Chill Vibes</h4>
            <p className="mb-4 text-sm text-gray-300">Relaxing tunes for you</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
              Listen Now
            </button>
          </div>
          {/* You can duplicate or map more items here */}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
