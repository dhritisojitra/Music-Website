import React from "react";
import ArtistCard from "./components/ArtistCard";

function ArtistList(){
    const artists = [
        {name: 'Harry Styles', image: 'Harry-Styles.jpg'};
        {name: 'The Weekend', image: 'The-Weekend.jpg'};
        {name: 'Bruno Mars', image: 'Bruno-Mars.jpg'};
        {name: 'Shawn Mendes', image: 'Shawn-Mendes.jpg'};
        {name: 'Lana Del Ray', image: 'Lana-Del-Ray.jpg'};
        {name: 'Arctic Monkeys', image: 'Arctic Monkeys.jpg'};

    ];

    return (
        <div className="artist-list">
            {artists.map((artist) => (
                <ArtistCard
                    key={artist.name}
                    artistName={artist.name}
                    artistImage={artist.image}
                    />
                )) } 
       </div>
    );
}

export default ArtistList;