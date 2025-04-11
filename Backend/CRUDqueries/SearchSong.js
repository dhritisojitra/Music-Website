
import db from "../config/db.js"

//Searching a song 

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
    ns.SpotifyURL
FROM newsong ns
JOIN Artists a ON ns.artistID = a.ArtistID
JOIN Album al ON ns.albumID = al.AlbumID
WHERE ns.songName LIKE CONCAT('%', ?, '%')
ORDER BY ns.songName = ? DESC;
`,
            [songName, songName]
        );

        return res.json({ success: true, songs });

    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}


