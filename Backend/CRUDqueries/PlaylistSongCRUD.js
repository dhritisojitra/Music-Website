
import db from '../config/db.js'

//adding songs into the playlist
const addSongToPlaylist = async (req, res) => {
    const { playlistName, userId, songId } = req.body;

    //Validate input
    if (!playlistName || !userId || !songId) {
        return res.json({ success: false, message: "Missing playlist name, user ID, or song ID" });
    }

    try {
        //Get Playlist_ID from playlist name and user ID
        const [playlistRows] = await db.query(
            "SELECT Playlist_ID FROM playlist WHERE Playlist_Name = ? AND User_ID = ?",
            [playlistName, userId]
        );

        if (playlistRows.length === 0) {
            return res.json({ success: false, message: "Playlist not found for this user" });
        }

        const playlistId = playlistRows[0].Playlist_ID;

        //Check if song exists
        const [songRows] = await db.query(
            "SELECT COUNT(*) AS count FROM newsong WHERE songID = ?",
            [songId]
        );
        if (songRows[0].count === 0) {
            return res.json({ success: false, message: "Song not found" });
        }

        //Check if song is already in playlist
        const [existing] = await db.query(
            "SELECT COUNT(*) AS count FROM playlist_songs WHERE Playlist_ID = ? AND Song_ID = ?",
            [playlistId, songId]
        );
        if (existing[0].count > 0) {
            return res.json({ success: false, message: "Song already in playlist" });
        }

        //Insert into playlist_songs
        await db.query(
            "INSERT INTO playlist_songs (Playlist_ID, Song_ID) VALUES (?, ?)",
            [playlistId, songId]
        );

        return res.json({ success: true, message: "Song added to playlist" });

    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};






//deleting song from the playlist
const removeSongFromPlaylist = async (req, res) => {
    const { playlistName, userId, songId } = req.body;

    //Validate input
    if (!playlistName || !userId || !songId) {
        return res.json({ success: false, message: "Missing playlist name, user ID, or song ID" });
    }

    try {
        //Get Playlist_ID
        const [playlistRows] = await db.query(
            "SELECT Playlist_ID FROM playlist WHERE Playlist_Name = ? AND User_ID = ?",
            [playlistName, userId]
        );

        if (playlistRows.length === 0) {
            return res.json({ success: false, message: "Playlist not found for this user" });
        }

        const playlistId = playlistRows[0].Playlist_ID;

        //Check if song exists in the playlist
        const [songInPlaylist] = await db.query(
            "SELECT COUNT(*) AS count FROM playlist_songs WHERE Playlist_ID = ? AND Song_ID = ?",
            [playlistId, songId]
        );

        if (songInPlaylist[0].count === 0) {
            return res.json({ success: false, message: "Song not found in playlist" });
        }

        //Delete song from playlist
        await db.query(
            "DELETE FROM playlist_songs WHERE Playlist_ID = ? AND Song_ID = ?",
            [playlistId, songId]
        );

        return res.json({ success: true, message: "Song removed from playlist" });

    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};

