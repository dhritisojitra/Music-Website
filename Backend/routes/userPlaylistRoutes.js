import express from "express";

import {createPlaylist, deletePlaylist, getDailyMix, getPlaylists} from "../CRUDqueries/PlaylistCRUD.js"
import { addSongToPlaylist, getPlaylistSongs, getRecommendedSongs, removeSongFromPlaylist } from "../CRUDqueries/PlaylistSongCRUD.js";

const userPlaylistRouter = express.Router();

userPlaylistRouter.post("/create", createPlaylist);
userPlaylistRouter.get("/get/:userId", getPlaylists)
userPlaylistRouter.delete("/delete/:playlist_ID", deletePlaylist)

userPlaylistRouter.post("/addSong", addSongToPlaylist)
userPlaylistRouter.delete("/deleteSong/:playlistId",removeSongFromPlaylist)
userPlaylistRouter.get("/getPlaylist/:userId/:playlist_ID",getPlaylistSongs)

//recommendation and mixes
userPlaylistRouter.get("/getRecommended/:userId", getRecommendedSongs)
userPlaylistRouter.get("/getMix/:userId", getDailyMix)


export default userPlaylistRouter