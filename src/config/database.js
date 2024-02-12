import mysql from "mysql2/promise";
import "dotenv/config";

const dbPool = mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});

export default dbPool;