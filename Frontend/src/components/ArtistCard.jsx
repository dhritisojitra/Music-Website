import React from "react";


function ArtistList(){
    const artists = [
        {name: 'Harry Styles', image: 'Harry-Styles.jpg'},
        {name: 'The Weekend', image: 'The-Weekend.jpg'},
        {name: 'Bruno Mars', image: 'Bruno-Mars.jpg'},
        {name: 'Shawn Mendes', image: 'Shawn-Mendes.jpg'},
        {name: 'Lana Del Ray', image: 'Lana-Del-Ray.jpg'},
        {name: 'Arctic Monkeys', image: 'Arctic Monkeys.jpg'},

    ];

    return (
        <div className="artist-list">
            {artists.map((artist) => (
                <div key={artist.name} className="artist">
                    <img src={artist.image} alt={artist.name} />
                    <p>{artist.name}</p>
                </div>
            ))}
        </div>
    );
}

export default ArtistList;