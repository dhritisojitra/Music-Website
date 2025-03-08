import React from "react";
import ArtistCard from "../components/ArtistCard";

function HomePage() {
  return (
    <div className="home-page">
      <h1>Featured Artists</h1>
      <div className="featured-artists">
        <ArtistCard artistName="Harry Styles" artistImage = "Harry-Styles.jpg"/>
        <ArtistCard artistName="The Weekend" artistImage="The-Weekend.jpg"/>
        <ArtistCard artistName="Bruno Mars" artistImage="Bruno-Mars.jpg"/>
        <ArtistCard artistName="Shawn Mendes" artistImage="Shawn-Mendes.jpg"/>
        <ArtistCard artistName="Lana Del Ray" artistImage="Lana-Del-Ray.jpg"/>
        <ArtistCard artistName="Arctic Monkeys" artistImage="Arctic-Monkeys.jpg"/>
      </div>
    </div>
  );
}

export default Home; 