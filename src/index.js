import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;

import usersRoutes from "./routes/users.js";
import middlewareLogRequest from ".//middleware/logs.js";
import "dotenv/config";

//* menngunakan file middelware untuk logging ------
//* harus ada di pling atas agar bisa berjalan di semua code ------
app.use(middlewareLogRequest);

//* agar requset body diizinkan, kita harus membuat middleware agar diizinkan ------
app.use(express.json());

//* menggunakan file dari users-routes.js --------
app.use("/users", usersRoutes);

app.listen(PORT, () => {
	console.log(`Server is running on port: http://localhost:${PORT}`);
});
