import Ok from '../Ok'
import { Play } from "lucide-react";

function Playlist(){
    return(
        <>
        <Ok/>
        <div className="bg-gradient-to-b from purple-950 to-black">
        <div className="flex items-center justify-between bg-violet-600 h-30 mt-2 rounded-lg m-10 p-4">
      {/* Playlist Name */}
      <h2 className="text-white text-lg font-semibold">Playlist Name</h2>

      {/* Play Button */}
      <button className="flex items-center justify-center w-12 h-12 bg-green-700 hover:bg-green-800 text-white rounded-full shadow-lg">
        <Play className="w-6 h-6" />
      </button>
    </div>

    <div className="flex items-center justify-between bg-violet-600 h-30 mt-2 rounded-lg m-10 p-4">
      {/* Playlist Name */}
      <h2 className="text-white text-lg font-semibold">Playlist Name</h2>

      {/* Play Button */}
      <button className="flex items-center justify-center w-12 h-12 bg-green-700 hover:bg-green-800 text-white rounded-full shadow-lg">
        <Play className="w-6 h-6" />
      </button>
    </div>
    </div>
        </>
    )
}

export default Playlist;