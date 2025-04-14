//searching songs by artist name
const searchSongsByArtist = async (req, res) => {
    const { artistName } = req.body;

    if (!artistName) {
        return res.json({ success: false, message: "Artist name is required" });
    }

    try {
        const [rows] = await db.query(
            `SELECT songID, songName, ArtistName
FROM newsong
JOIN artists  ON newsong.ArtistID = artists.ArtistID
WHERE ArtistName = ?`,
            [artistName]
        );

        if (rows.length === 0) {
            return res.json({ success: false, message: "No songs found for this artist" });
        }

        return res.json({ success: true, songs: rows });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};

//creating playlist for user
const createPlaylist = async (req, res) => {
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
            playlistId: newPlaylistId
        });

    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};



//get recommended songs based on the artists in their playlists 


const getRecommendedSongs = async (req, res) => {
    const { userId } = req.body;

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
LIMIT 5;
            `,
            [userId, userId]
        );

        return res.json({ success: true, recommendations: recommendedSongs });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};

