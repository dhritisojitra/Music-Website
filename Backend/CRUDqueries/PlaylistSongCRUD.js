
import db from '../config/db.js'

//adding songs into the playlist
export const addSongToPlaylist = async (req, res) => {
    const { playlist_ID, userId, songId } = req.body;

    //Validate input
    if (!playlist_ID || !userId || !songId) {
        return res.json({ success: false, message: "Missing playlist name, user ID, or song ID" });
    }

    try {
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
            [playlist_ID, songId]
        );
        if (existing[0].count > 0) {
            return res.json({ success: false, message: "Song already in playlist" });
        }

        //Insert into playlist_songs
        await db.query(
            "INSERT INTO playlist_songs (Playlist_ID, Song_ID) VALUES (?, ?)",
            [playlist_ID, songId]
        );

        return res.json({ success: true, message: "Song added to playlist" });

    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};

//deleting song from the playlist
export const removeSongFromPlaylist = async (req, res) => {
    const { playlist_Name, userId, songId } = req.body;

    //Validate input
    if (!playlist_Name || !userId || !songId) {
        return res.json({ success: false, message: "Missing playlist name, user ID, or song ID" });
    }

    try {
        //Get Playlist_ID
        const [playlistRows] = await db.query(
            "SELECT Playlist_ID FROM playlist WHERE Playlist_Name = ? AND User_ID = ?",
            [playlist_Name, userId]
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

//fetching the playlist song along with its song details

export const getPlaylistSongs = async (req, res) => {
    const { userId, playlist_ID } = req.params;

    if (!userId || !playlist_ID) {
        return res.json({ success: false, message: "Missing userId or playlist_ID" });
    }

    try {
        //Check if the user exists
        const [userRows] = await db.query(
            "SELECT * FROM User WHERE User_ID = ?",
            [userId]
        );
        if (userRows.length === 0) {
            return res.json({ success: false, message: "User does not exist" });
        }

        //Check if the playlist exists for this user
        const [playlistRows] = await db.query(
            "SELECT Playlist_ID FROM playlist WHERE Playlist_Name = ? AND User_ID = ?",
            [playlist_ID, userId]
        );
        if (playlistRows.length === 0) {
            return res.json({ success: false, message: "Playlist does not exist for this user" });
        }

        const playlistId = playlistRows[0].Playlist_ID;

        //Fetch songs in the playlist
        const [songs] = await db.query(
            `SELECT 
                newsong.songID,
                newsong.songName,
                newsong.SpotifyURL,
                album.albumName,
                newsong.DurationMS,
                artists.ArtistName
             FROM playlist 
             JOIN playlist_songs  ON playlist.Playlist_ID = playlist_songs.Playlist_ID
             JOIN newsong  ON playlist_songs.Song_ID = newsong.songID
             JOIN artists  ON newsong.artistID = artists.ArtistID
             JOIN album ON newsong.albumID = album.albumID
             WHERE playlist.User_ID = ? AND playlist.Playlist_ID = ?`,
            [userId, playlistId]
        );

        if (songs.length === 0) {
            return res.json({ success: true, message: "Playlist is empty", songs: [] });
        }

        return res.json({ success: true, songs });

    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};

//get recommended songs for a particular playlist

export const getRecommendedSongs = async (req, res) => {
    const { userId } = req.params;

    if (!userId) {
        return res.json({ success: false, message: "Missing user ID" });
    }

    try {
        const [recommendedSongs] = await db.query(
            `
            SELECT newsong.songID, newsong.songName, artists.ArtistName, newsong.AlbumReleaseDate
FROM newsong 
JOIN artists ON newsong.artistID = artists.ArtistID
WHERE newsong.artistID IN (
    SELECT DISTINCT newsong.artistID
    FROM playlist 
    JOIN playlist_songs ON playlist.Playlist_ID = playlist_songs.Playlist_ID
    JOIN newsong  ON playlist_songs.Song_ID = newsong.songID
    WHERE playlist.User_ID = ?
)
AND newsong.songID NOT IN (
    SELECT playlist_songs.Song_ID
    FROM playlist 
    JOIN playlist_songs  ON playlist.Playlist_ID = playlist_songs.Playlist_ID
    WHERE playlist.User_ID = ?
)
ORDER BY newsong.AlbumReleaseDate DESC
LIMIT 10;
            `,
            [userId, userId]
        );

        return res.json({ success: true, recommendations: recommendedSongs });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};

//daily mix 