import React from 'react';
import ArtistList from '../pages/Artist';

const Card = ({ image, title, text, link }) => {
  return (
    <div className="card" style={{ width: '22rem' }}>
        <ArtistList/>
        </div>
  );
};

export default Card;
