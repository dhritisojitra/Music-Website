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
    const q = "SELECT * FROM temp"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});