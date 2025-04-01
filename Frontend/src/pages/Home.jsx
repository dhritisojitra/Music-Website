import { useState } from 'react';
import Ok from '../Ok'
import ArtistCard from '../components/ArtistCard'
import API from '../utils/Api';


function Home() {

  const [val, setVal] = useState("");




  const search = async()=>{
    try{
      const response =await API.post("/search", val)
      console.log(response.data);
      
    }
    catch(err){
      console.err(err)
    }
  }
  return (
    <>
      <Ok />
      <ArtistCard />
      <div className='bg-blue-100 min-h-screen p-10 flex flex-col items-center'>
        <div className=' flex items-center flex-col w-full max-w-3xl bg-white p-6 rounded-lg shadow-md m-2'>
          <h3>Search a song</h3>
          <div className='flex items-center space-x-4'>
            <input
              type="text"
              placeholder="Search..."
              className="text-black flex-1 bg-purple-300 p-2 rounded-md"
              value={text}
              onChange={(e) => setVal(e.target.value)}
            />
            <button
              className='bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300'
              onClick={search}
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