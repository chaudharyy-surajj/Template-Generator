import { Router } from "express";
import { deleteAccount, getProfile, updateProfile } from "../controllers/user.controller";
import { requireAuth } from "../middleware/auth";

const router = Router();

router.get("/profile", requireAuth, getProfile);
router.put("/profile", requireAuth, updateProfile);
router.delete("/account", requireAuth, deleteAccount);

export default router;
