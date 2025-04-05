import { useContext, useState } from 'react';
import Ok from '../Ok'
import ArtistCard from '../components/ArtistCard'
import API from '../utils/Api';
import { AppContent } from '../Context/AppContext.jsx';


function Home() {

  const [val, setVal] = useState("");

  const {userData} = useContext(AppContent)


  return (
    <>
      <Ok />
      <h1>Hello  {userData ? userData.name.userName : 'Developer'} </h1>
      <ArtistCard />
      
      <div className='bg-blue-100 min-h-screen p-10 flex flex-col items-center'>
        <div className=' flex items-center flex-col w-full max-w-3xl bg-white p-6 rounded-lg shadow-md m-2'>
          <h3>Search a song</h3>
          <div className='flex items-center space-x-4'>
            <input
              type="text"
              placeholder="Search..."
              className="text-black flex-1 bg-purple-300 p-2 rounded-md"
              
              onChange={(e) => setVal(e.target.value)}
            />
            <button
              className='bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300'
            
            >
              Submit
            </button>
          </div>

        </div>



      </div>
    </>
  )
}

export default Home;