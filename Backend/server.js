const express = require("express")
const cors = require("cors")
const db = require("./db")

//connecting with express and cors
const app = express();
app.use(cors());
app.use(express.json());

app.post("/message", (req,res)=>{
    console.log(req.body.message)
    res.json({reply: "got the message"})
});

app.get("/table", (req,res)=>{
    const q = "SELECT * FROM NewSong"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/songs", (req,res)=>{
    const q = "SELECT * FROM NewSong"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        res.json(data)
        
    })
})
app.get("/manan", (req,res)=>{
    res.json("manan is here")
})


app.post("/search", (req,res)=>{
    const {song}= req.body

    const q = "Select * from newsong WHERE songName = ?"
    db.query(q,[song],(err,data)=>{
        if(err) return res.json(err)

        res.json(data)
    })
})


app.post("/searchByArtist", (req, res) => {
    console.log("Received request at /searchByArtist"); // Log the request
    console.log("Request body:", req.body); // Log the body content

    const { singer } = req.body; 

    if (!singer) {
        console.error("No singer provided");
        return res.status(400).json({ error: "Singer name is required" });
    }

    console.log("Searching for singer:", singer); // Log search term

    const q = `
        SELECT newsong.songName, artists.ArtistName
        FROM newsong
        JOIN artists ON newsong.artistID = artists.ArtistID
        WHERE artists.ArtistName = ?;
    `;

    db.query(q, [singer], (err, data) => {
        if (err) {
            console.error("Database Error:", err);
            return res.status(500).json({ error: "Database query failed" });
        }

        console.log("Query result:", data);
        res.json(data);
    });
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});