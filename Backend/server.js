const express = require("express")
const cors = require("cors")
const db = require("./config/db")
const cookieParser = require("cookie-parser")

const {register,login} = require("./controllers/authcontroller")

//connecting with express and cors
const app = express();


app.use(express.json());
app.use(cors({credentials: true}))
app.use(cookieParser())

const port = process.env.PORT || 4000




app.post("/register", register)

app.post("/login",login)


/* 
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


*/

const PORT = port;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});