import db from "../config/db.js";

export const getUserData = async (req, res) => {
    try {
        const { userID } = req.body

        const [user] = await db.query("Select userName from User where User_ID = ?", [userID]);

        if (user[0].count == 0) {
            return res.json({ success: false, message: "User not found" })
        }
        res.json({
            success: true,
            userData: {
                name: user[0]
            }

        })
    } catch (err) {
        res.json(err)
    }
}