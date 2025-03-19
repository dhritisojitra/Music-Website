
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import axios from "axios";
const buttonClicker = async()=> {
 try{
  const response = await axios.post("http://localhost:5000/message", {message: "hello"})
  console.log(response.data)
 }
 catch(error){
  console.error(error)
 }
}

function App(){


  const [songs,setSongs] = useState([])
const getSongs = async()=>{
  try{
    const response = await axios.get("http://localhost:5000/songs")
    console.log(response.data)
    setSongs(response.data)
    
  }
  catch(error){
    console.error(error)
  }
}
  return (
    <div>
     <Navbar/>
        <h1> Welcome to the Music Website </h1>
        <button onClick={buttonClicker}>Click me</button>

        <button onClick={getSongs}>Get Songs</button>



         {/* ✅ Display songs in a table */}
      {songs.length > 0 && (
        <table border="1">
          <thead>
            <tr>
              <th>Song ID</th>
              <th>Song Name</th>
              <th>Duration (ms)</th>
              <th>Spotify URL</th>
              <th>AlbumID</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => (
              <tr key={song.songID}>
                <td>{song.songID}</td>
                <td>{song.songName}</td>
                <td>{song.DurationMS}</td>
                <td>
                  <a href={song.SpotifyURL} target="_blank" rel="noopener noreferrer">
                    Listen
                  </a>
                 
                </td>
                <td>{song.albumID}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
