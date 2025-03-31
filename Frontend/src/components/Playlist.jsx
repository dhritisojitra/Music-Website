import Ok from '../Ok'
import { Play } from "lucide-react";

function Playlist() {
  return (
    <>
      <Ok />
      <div className="bg-gradient-to-b from-purple-950 to-black p-3 min-h-screen ">
        <div className="  sm:flex flex flex-row text-white text-lg font-semibold bg-violet-900 h-20  rounded-lg p-4  mx-10 sm:mx-10">
          <div className='flex-1'>Title</div>
          <div className='flex-1'>Date Added</div>
          <div className='flex-1'>No. of Songs</div>
        </div>
        <div className="flex sm:flex-row items-center justify-between bg-violet-600 h-30 mt-1 rounded-lg mx-10 p-4 cursor-pointer transition-transform duration-300 hover:scale-103 hover:bg-violet-400">

          {/* Playlist Name */}
          <h2 className="flex-1 text-white text-lg font-semibold sm:text-left">Playlist Name</h2>
          <h5 className='flex-1 text-white text-[36px]'>20/03/2025</h5>
          <h5 className='flex-1 text-white text-2xl'>45</h5>
          {/* Play Button */}
        </div>
        <div className="flex sm:flex-row items-center justify-between bg-violet-600 h-30 mt-1 rounded-lg mx-10 p-4 cursor-pointer transition-transform duration-300 hover:scale-103 hover:bg-violet-400">

          {/* Playlist Name */}
          <h2 className="flex-1 text-white text-lg font-semibold sm:text-left">Playlist Name</h2>
          <h5 className='flex-1 text-white text-[36px]'>20/03/2025</h5>
          <h5 className='flex-1 text-white text-2xl'>45</h5>
          {/* Play Button */}
        </div>

        <div className="flex sm:flex-row items-center justify-between bg-violet-600 h-30 mt-1 rounded-lg mx-10 p-4 cursor-pointer transition-transform duration-300 hover:scale-103 hover:bg-violet-400">

          {/* Playlist Name */}
          <h2 className="flex-1 text-white text-lg font-semibold sm:text-left">Playlist Name</h2>
          <h5 className='flex-1 text-white text-[36px]'>20/03/2025</h5>
          <h5 className='flex-1 text-white text-2xl'>45</h5>
          {/* Play Button */}
        </div>


      </div>
    </>
  )
}

export default Playlist;