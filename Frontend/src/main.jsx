import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import Settings from './components/Settings'
import Library from './components/Library'
import Playlist from './components/Playlist'
import Home from './pages/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<App/>} />
      <Route path='/home' element ={<Home/>} />
      <Route path='/settings' element={<Settings/>} />
      <Route path='/library' element={<Library/>} />
      <Route path='/my_playlists' element={<Playlist/>} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
);
