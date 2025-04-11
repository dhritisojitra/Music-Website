import { useContext } from 'react';
import Ok from '../Ok';
import ArtistCard from '../components/ArtistCard';
import { AppContent } from '../Context/AppContext.jsx';
import AddPlaylistSection from "../components/AddPlaylistSection.jsx";

function Home() {
  const { userData } = useContext(AppContent);

  return (
    <>
      <Ok />
      <div className="bg-[#1e0a3c] text-white py-6 px-10">
        <h1 className="text-3xl font-semibold">
          Hello {userData ? userData.name.userName : 'Developer'}
        </h1>
      </div>

      <div className="bg-gradient-to-b from-[#1e0a3c] to-black min-h-screen px-10 pb-10">
        <ArtistCard />
        <AddPlaylistSection />
      </div>
    </>
  );
}

export default Home;
