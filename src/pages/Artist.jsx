import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ArtistList = () => {
  const artists = [
    { name: 'Harry Styles', image: 'Harry-Styles.jpeg' },
    { name: 'The Weekend', image: 'The-Weekend.jpeg' },
    { name: 'Bruno Mars', image: 'Bruno-Mars.jpeg' },
    { name: 'Shawn Mendes', image: 'Shawn-Mendes.jpeg' },
    { name: 'Lana Del Ray', image: 'Lana-Del-Ray.jpeg' },
    { name: 'Arctic Monkeys', image: 'Arctic-Monkeys.jpeg' },
    { name: 'Post Malone', image: 'Post-Malone.jpg' },
  ];

  return (
    <div className="container" style={{ padding: '40px', background: 'linear-gradient(to bottom, #1e0a3c, #0d0d0d)', minHeight: '100vh'}}>
      <div className="row">
        {artists.map((artist) => (
          <div className="col-md-4 mb-4" key={artist.name}>
            <div className="card" style={{ backgroundColor: '#2a1a4b', color: 'white', border: 'none', borderRadius: '10px' }}>
              <img
                src={artist.image}
                className="card-img-top"
                alt={artist.name}
                style={{ height: '300px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ textAlign: 'center' }}>{artist.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistList;
