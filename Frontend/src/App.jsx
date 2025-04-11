import React from "react";
import { BrowserRouter, Routes, Route ,Navigate} from "react-router-dom";
import AuthPage from "./Auth/AuthPage.jsx";
import Home from "./pages/Home.jsx";
import Settings from "./components/Settings.jsx";
import Library from "./components/Library.jsx";
import Playlist from "./components/Playlist.jsx";
import ArtistCard from "./components/ArtistCard.jsx";
import { ReactHooks } from "./ReactHooks/ReactHooks.jsx";
import { UseEffect } from "./ReactHooks/UseEffect.jsx";
import { Useref } from "./ReactHooks/Useref.jsx";
import { UseMemo } from "./ReactHooks/UseMemo.jsx";
import { UseCallbackfn } from "./ReactHooks/UseCallbackfn.jsx";
import Songs from "./pages/Songs.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth route */}
        <Route path="/auth" element={<AuthPage />} />

        {/* Main app routes */}
        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="/home" element={<Home />} />

        <Route path="/settings" element={<Settings />} />
        <Route path="/library" element={<Library />} />
        <Route path="/my_playlists" element={<Playlist />} />
        <Route path="/artist" element={<ArtistCard />} />
        <Route path='/songs' element ={<Songs/>}/>
        {/* React Hooks playground */}
        <Route path="/usestate" element={<ReactHooks />} />
        <Route path="/useeffect" element={<UseEffect />} />
        <Route path="/useref" element={<Useref />} />
        <Route path="/usememo" element={<UseMemo />} />
        <Route path="/usecallback" element={<UseCallbackfn />} />
      </Routes>
    </BrowserRouter>
  );
}
