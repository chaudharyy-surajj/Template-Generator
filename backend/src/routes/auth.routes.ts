import { Router } from "express";
import { login, logout, me, register, resetPassword } from "../controllers/auth.controller";
import { requireAuth } from "../middleware/auth";
import { authLimiter } from "../middleware/rateLimit";

const router = Router();

router.post("/register", authLimiter, register);
router.post("/login", authLimiter, login);
router.post("/logout", requireAuth, logout);
router.post("/reset-password", authLimiter, resetPassword);
router.get("/me", requireAuth, me);

export default router;
