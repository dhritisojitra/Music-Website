import express from "express";

import {createPlaylist, getPlaylists} from "../CRUDqueries/PlaylistCRUD.js"
import { addSongToPlaylist, getPlaylistSongs, removeSongFromPlaylist } from "../CRUDqueries/PlaylistSongCRUD.js";

const userPlaylistRouter = express.Router();

userPlaylistRouter.post("/create", createPlaylist);
userPlaylistRouter.get("/get/:userId", getPlaylists)

userPlaylistRouter.post("/addSong", addSongToPlaylist)
userPlaylistRouter.put("/deleteSong/:playlistId",removeSongFromPlaylist)
userPlaylistRouter.get("/getPlaylist/:userId/:playlist_ID",getPlaylistSongs)


export default userPlaylistRouter