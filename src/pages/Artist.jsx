import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ArtistList = () => {
  const artists = [
    { name: "Harry Styles", image: "https://via.placeholder.com/150" },
    { name: "The Weeknd", image: "https://via.placeholder.com/150" },
    { name: "Bruno Mars", image: "https://via.placeholder.com/150" },
    { name: "Shawn Mendes", image: "https://via.placeholder.com/150" },
    { name: "Lana Del Ray", image: "https://via.placeholder.com/150" },
    { name: "Arctic Monkeys", image: "https://via.placeholder.com/150" },
    { name: "Post Malone", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div
      className="container-fluid min-vh-100 d-flex flex-column"
      style={{ backgroundColor: "#1e0a3c", padding: "2rem" }}
    >
      <h2 className="text-white text-center mb-4">Top Artists</h2>
      
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {artists.map((artist, index) => (
          <div key={index} className="col">
            <div className="card text-white bg-dark shadow-lg h-100">
              <img
                src={artist.image}
                className="card-img-top"
                alt={artist.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{artist.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistList;
