import React from 'react';
import '../styles/ArtistCard.css'; // we'll create this

function ArtistCard({ artistName, artistImage }) {
    return (
        <div className="artist-card">
            <img src={`/assets/${artistImage}`} alt={artistName} />
            <h2>{artistName}</h2>
        </div>
    );
}

export default ArtistCard;
