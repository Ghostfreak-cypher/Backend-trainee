import { Router } from "express";
import {
  newUser,
  login,
  forgotPassword,
} from "../controllers/loginSignUp.controller.js";
const router = Router();
router.post("/signup", newUser);
router.get("/login", login);
router.put("/forgotPassword/:id", forgotPassword);

export default router;
