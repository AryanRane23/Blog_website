import express from "express";
import { registerUser } from "../controllers/userController.js"; // Controller for user logic

const router = express.Router();

// Route for user registration
router.post("/register", registerUser);

export default router;
