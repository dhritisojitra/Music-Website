import db from "../config/db.js";

// Searching a song 
export const SearchSong = async (req, res) => {
    const { songName } = req.query;

    if (!songName) {
        return res.json({ success: false, message: "Missing song name to search" });
    }

    try {
        const [songs] = await db.query(
            `SELECT 
                ns.songID, 
                ns.songName, 
                a.ArtistName, 
                al.albumName, 
                ns.DurationMS, 
                ns.SpotifyURL,
                g.genreName
            FROM newsong ns
            JOIN Artists a ON ns.artistID = a.ArtistID
            JOIN Album al ON ns.albumID = al.AlbumID
            JOIN Genre g ON ns.genreID = g.genreID
            WHERE 
                LOWER(ns.songName) LIKE LOWER(CONCAT('%', ?, '%')) OR 
                LOWER(a.ArtistName) LIKE LOWER(CONCAT('%', ?, '%')) OR 
                LOWER(g.genreName) LIKE LOWER(CONCAT('%', ?, '%'))
            ORDER BY ns.songName ASC;`,
            [songName, songName, songName]
        );

        return res.json({ success: true, songs });

    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};
