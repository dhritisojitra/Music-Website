import express from "express";

import {createPlaylist, getPlaylists} from "../CRUDqueries/PlaylistCRUD.js"

const userPlaylistRouter = express.Router();

userPlaylistRouter.post("/create", createPlaylist);
userPlaylistRouter.get("/get/:userId", getPlaylists)


export default userPlaylistRouter