import express from "express";
import { register } from "../controllers/userController.js";
import { login } from "../controllers/userController.js";
import { getAll } from "../controllers/userController.js";
import { getById } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/getAll", getAll);
router.get("/:id", getById);

export default router;
