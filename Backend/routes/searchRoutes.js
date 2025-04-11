import express from "express";
import { SearchSong } from "../CRUDqueries/SearchSong.js";

const SearchSongRouter = express.Router();

SearchSongRouter.get("/searchSong", SearchSong);



export default SearchSongRouter