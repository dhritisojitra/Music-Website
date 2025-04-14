
import db from "../config/db.js"

//Creating a Playlist
export const createPlaylist = async (req, res) => {
    const { playlistName, userId } = req.body;

    //Validate input
    if (!playlistName || !userId) {
        return res.json({ success: false, message: "Missing playlist name or user ID" });
    }

    try {

        //Check if the same playlist name already exists for the user
        const [existingPlaylist] = await db.query(
            "SELECT * FROM playlist WHERE Playlist_Name = ? AND User_ID = ?",
            [playlistName, userId]
        );
        if (existingPlaylist.length > 0) {
            return res.json({ success: false, message: "Playlist already exists for this user" });
        }

        //Generate new Playlist_ID
        const [lastPlaylist] = await db.query(
            "SELECT Playlist_ID FROM playlist ORDER BY Playlist_ID DESC LIMIT 1"
        );

        let newPlaylistId = "PL001"; // default if no playlists exist
        if (lastPlaylist.length > 0) {
            const lastId = lastPlaylist[0].Playlist_ID; // e.g., "PL007"
            const num = parseInt(lastId.slice(2)) + 1;
            newPlaylistId = "PL" + num.toString().padStart(3, "0");
        }

        //Insert new playlist
        await db.query(
            "INSERT INTO playlist (Playlist_ID, Playlist_Name, User_ID) VALUES (?, ?, ?)",
            [newPlaylistId, playlistName, userId]
        );

        return res.json({
            success: true,
            message: "Playlist created successfully",
            playlistId: newPlaylistId,
            name : playlistName
        });

    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};

//deleting playlist 

export const deletePlaylist = async (req, res) => {
    const { playlist_ID } = req.params;

    if (!playlist_ID) {
        return res.status(400).json({ success: false, message: "Missing playlist ID" });
    }

    try {
        // Optional: Check if playlist exists (could prevent redundant delete attempts)
        const [playlistRows] = await db.query(
            "SELECT * FROM playlist WHERE Playlist_ID = ?",
            [playlist_ID]
        );

        if (playlistRows.length === 0) {
            return res.status(404).json({ success: false, message: "Playlist not found" });
        }

        // Delete related entries from playlist_songs
        await db.query(
            "DELETE FROM playlist_songs WHERE Playlist_ID = ?",
            [playlist_ID]
        );

        // Delete the playlist itself
        await db.query(
            "DELETE FROM playlist WHERE Playlist_ID = ?",
            [playlist_ID]
        );

        return res.status(200).json({ success: true, message: "Playlist deleted successfully" });

    } catch (error) {
        console.error("Error deleting playlist:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};


//fetching playlists of a user
export const getPlaylists = async (req, res) => {
    const { userId } = req.params;

    if (!userId) {
        return res.json({ success: false, message: "Missing userId" });
    }

    try {
        const [userRows] = await db.query("SELECT * FROM User WHERE User_ID = ?", [userId]);
        if (userRows.length === 0) {
            return res.json({ success: false, message: "User does not exist" });
        }

        const [playlistRows] = await db.query(
            "SELECT * FROM Playlist WHERE User_ID = ?",
            [userId]
        );

        if (playlistRows.length === 0) {
            return res.json({ success: true, playlist: [] }); // It's okay to return an empty list
        }

        return res.json({ success: true, playlist: playlistRows });

    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};
