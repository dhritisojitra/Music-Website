const mysql = require("mysql2/promise");
require("dotenv").config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

// Optional: test connection
(async () => {
  try {
    const connection = await db.getConnection();
    console.log("✅ Connected to MySQL!");
    connection.release(); // release back to pool
  } catch (err) {
    console.error("❌ Database connection failed:", err.message);
  }
})();

module.exports = db;
