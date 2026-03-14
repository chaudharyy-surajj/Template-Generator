import { Router } from "express";
import { cancel, createSubscription, currentSubscription, getPlans } from "../controllers/subscription.controller";
import { requireAuth } from "../middleware/auth";

const router = Router();

router.get("/plans", getPlans);
router.get("/current", requireAuth, currentSubscription);
router.post("/create", requireAuth, createSubscription);
router.post("/cancel", requireAuth, cancel);

export default router;
