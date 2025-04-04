    const bcrypt = require("bcryptjs")

    const jwt = require("jsonwebtoken")
    const db = require("../config/db")

    //when user registers for the first time
  const register = async(req,res)=>{
        const{name, password} = req.body
    
        if(!name || !password){
            return res.json({success:false, message:"Missing details"})
        }
        try{
            const [rows] = await db.query( "SELECT COUNT(*) AS count FROM User WHERE userName = ?",
                [name]);
            if(rows[0].count>0){
                return res.json({success:false, message:"User already exists"})
            }

            const [idResult] = await db.query("SELECT User_ID FROM User ORDER BY User_ID DESC LIMIT 1");
            let newId = "USER001"; // default if no users
            if (idResult.length > 0) {
            const lastId = idResult[0].User_ID; // e.g., "USER007"
            const num = parseInt(lastId.slice(4)) + 1;
            newId = "USER" + num.toString().padStart(3, "0");
            }
            const hashPassword = await bcrypt.hash(password,10); //10 is the buffer

            await db.query(
                "INSERT INTO User (User_ID, userName, password) VALUES (?, ?, ?)",
                [newId, name, hashPassword]
            );
        
            return res.json({ success: true, message: "User registered successfully", userId: newId }); 
        } catch(error){
            res.json({success:false, message:error.message})
        }
    }
    //Login controller
    const login = async(req,res)=>{
        const {name, password} = req.body

        if(!name || !password){
            return res.json({success:false, message:"Username and password are required"})
        }
        try{
                //first check is username exists or not
            const [rows] = await db.query( "SELECT COUNT(*) AS count FROM User WHERE userName = ?",
                [name]);

            if(rows[0].count==0){
                return res.json({success:false, message:"User does not exist"})
            }
            //get the hased pass and then compare to the one coming from client
            
            const [storedPassRow] = await db.query("SELECT password FROM User WHERE userName= ?", [name]);

            const isMatch = await bcrypt.compare(password, storedPassRow[0].password);

            if(!isMatch){
                return res.json({success:false, message:"Invalid password"})
            }

            return res.json({success: true, message:"Successfully logged in"})

        } catch(err){
            res.json({success:false, message:err.message})
        }
        
    }

    module.exports={
        register,
        login
    }