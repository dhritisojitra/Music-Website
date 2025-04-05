import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../config/db.js"; // Make sure db.js also uses ESM

// When user registers for the first time
export const register = async (req, res) => {
    const { name, password } = req.body;

    if (!name || !password) {
        return res.json({ success: false, message: "Missing details" });
    }

    try {
        const [rows] = await db.query(
            "SELECT COUNT(*) AS count FROM User WHERE userName = ?",
            [name]
        );

        if (rows[0].count > 0) {
            return res.json({ success: false, message: "User already exists" });
        }

        const [idResult] = await db.query("SELECT User_ID FROM User ORDER BY User_ID DESC LIMIT 1");
        let newId = "USER001"; // default if no users

        if (idResult.length > 0) {
            const lastId = idResult[0].User_ID; // e.g., "USER007"
            const num = parseInt(lastId.slice(4)) + 1;
            newId = "USER" + num.toString().padStart(3, "0");
        }

        const hashPassword = await bcrypt.hash(password, 10); // 10 is the buffer

        await db.query(
            "INSERT INTO User (User_ID, userName, password) VALUES (?, ?, ?)",
            [newId, name, hashPassword]
        );

        return res.json({ success: true, message: "User registered successfully", userId: newId });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// Login controller
export const login = async (req, res) => {
    const { name, password } = req.body;

    if (!name || !password) {
        return res.json({ success: false, message: "Username and password are required" });
    }

    try {
        const [rows] = await db.query(
            "SELECT COUNT(*) AS count FROM User WHERE userName = ?",
            [name]
        );

        if (rows[0].count == 0) {
            return res.json({ success: false, message: "User does not exist" });
        }

        const [storedPassRow] = await db.query("SELECT password FROM User WHERE userName= ?", [name]);

        const isMatch = await bcrypt.compare(password, storedPassRow[0].password);

        if (!isMatch) {
            return res.json({ success: false, message: "Invalid password" });
        }

        const [userId] = await db.query("SELECT User_ID FROM User WHERE userName = ?", [name]);

        const token = jwt.sign(
            { id: userId[0].User_ID },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'Lax',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.json({ success: true, message: "Successfully logged in" });

    } catch (err) {
        res.json({ success: false, message: err.message });
    }
};

export const logout = async (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict'
        });

        return res.json({ success: true, message: "Logged out" });

    } catch (err) {
        res.json(err);
    }
};
