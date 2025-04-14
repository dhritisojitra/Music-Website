import express from "express";

import {createPlaylist, deletePlaylist, getPlaylists} from "../CRUDqueries/PlaylistCRUD.js"
import { addSongToPlaylist, getPlaylistSongs, removeSongFromPlaylist } from "../CRUDqueries/PlaylistSongCRUD.js";

const userPlaylistRouter = express.Router();

userPlaylistRouter.post("/create", createPlaylist);
userPlaylistRouter.get("/get/:userId", getPlaylists)
userPlaylistRouter.delete("/delete/:playlist_ID", deletePlaylist)

userPlaylistRouter.post("/addSong", addSongToPlaylist)
userPlaylistRouter.delete("/deleteSong/:playlistId",removeSongFromPlaylist)
userPlaylistRouter.get("/getPlaylist/:userId/:playlist_ID",getPlaylistSongs)



export default userPlaylistRouter