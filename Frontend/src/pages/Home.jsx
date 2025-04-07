import { useContext, useState } from 'react';
import Ok from '../Ok'
import ArtistCard from '../components/ArtistCard'

import { AppContent } from '../Context/AppContext.jsx';

import AddPlaylistSection from "../components/AddPlaylistSection.jsx"

function Home() {



  const {userData} = useContext(AppContent)


  return (
    <>
      <Ok />
      <h1>Hello  {userData ? userData.name.userName : 'Developer'} </h1>
      <ArtistCard />
      <AddPlaylistSection/>
      
   
    </>
  )
}

export default Home;