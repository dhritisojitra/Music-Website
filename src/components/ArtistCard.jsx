import React from 'react';
import { Globe, Music } from "lucide-react";

export default function ArtistCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-950 to-black p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-36">
        {/* Artist Card */}
        <div className="bg-black backdrop-blur-md p-6 rounded-2xl shadow-lg text-white border border-white/20">
          <img 
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.reddit.com%2Fr%2FBrunoMars%2Fcomments%2F1el6bdq%2Fwhat_is_your_favorite_bruno_mars_pic_this_is_my%2F&psig=AOvVaw1XFno8qazsPRRzJhNnFVio&ust=1743142930929000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKC39c3PqYwDFQAAAAAdAAAAABAE"
            alt="Artist" 
            className="w-52 h-52 mx-auto rounded-full object-cover border-2 border-purple-500"
          />
          <h2 className="text-xl font-semibold text-center mt-4">Artist Name</h2>
          <p className="text-center text-sm text-gray-300">Music Genre</p>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="hover:text-purple-400"><Globe className="w-5 h-5" /></a>
            <a href="#" className="hover:text-purple-400"><Music className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Duplicate Cards (Just for layout) */}
        <div className="bg-black backdrop-blur-md p-6 rounded-2xl shadow-lg text-white border border-white/20">
          <img 
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fopen.spotify.com%2Fartist%2F00FQb4jTyendYWaN8pK0wa&psig=AOvVaw25QGU3xIhSpaGrqhd_eGR-&ust=1743143101944000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMj5593QqYwDFQAAAAAdAAAAABAE"
            alt="Artist" 
            className="w-52 h-52 mx-auto rounded-full object-cover border-2 border-purple-500"
          />
          <h2 className="text-xl font-semibold text-center mt-4">Artist Name</h2>
          <p className="text-center text-sm text-gray-300">Music Genre</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="hover:text-purple-400"><Globe className="w-5 h-5" /></a>
            <a href="#" className="hover:text-purple-400"><Music className="w-5 h-5" /></a>
          </div>
        </div>

        <div className="bg-black backdrop-blur-md p-6 rounded-2xl shadow-lg text-white border border-white/20">
          <img 
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Fname%2Fnm4089170%2F&psig=AOvVaw2z6Po79HCL5EjZXFCkRC_M&ust=1743143031494000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJCTy4DQqYwDFQAAAAAdAAAAABAE"
            alt="Artist" 
            className="w-52 h-52 mx-auto rounded-full object-cover border-2 border-purple-500"
          />
          <h2 className="text-xl font-semibold text-center mt-4">Artist Name</h2>
          <p className="text-center text-sm text-gray-300">Music Genre</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="hover:text-purple-400"><Globe className="w-5 h-5" /></a>
            <a href="#" className="hover:text-purple-400"><Music className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
