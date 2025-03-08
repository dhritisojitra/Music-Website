import React from 'react';

function ArtistCard({artistName, artistImage}) {
  return (
    <div className="artist-card">
      <h1>Artist Page</h1>
      <img src={harryStylesImage} alt="Harry Styles"/>
      <h2>{artistName}</h2>
    </div>
  );
}

export default ArtistCard; 