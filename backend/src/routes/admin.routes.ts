import { Router } from "express";
import { deleteUser, listSubscriptions, listUsers } from "../controllers/admin.controller";
import { requireAdmin, requireAuth } from "../middleware/auth";

const router = Router();

router.use(requireAuth, requireAdmin);

router.get("/users", listUsers);
router.get("/subscriptions", listSubscriptions);
router.delete("/users/:id", deleteUser);

export default router;
