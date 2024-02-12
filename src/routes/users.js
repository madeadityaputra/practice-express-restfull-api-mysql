//* disini berfungsi untuk membuat berbagai router ---------
import express from "express";
const router = express.Router();

import userController from "../controller/users.js";

//* create user - post --------------------------------
router.post("/", userController.createNewUser);

//* read user - get --------------------------------
router.get("/", userController.getAllUsers);

//* update user - put --------------------------------
router.patch("/:id", userController.updateUser);

//* delete user - delete --------------------------------
router.delete("/:id", userController.deleteUser);

export default router;
