import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { env } from "./config/env";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import subscriptionRoutes from "./routes/subscription.routes";
import adminRoutes from "./routes/admin.routes";
import { errorHandler } from "./middleware/error-handler";
import { ensureAdminSeed } from "./services/auth.service";

const app = express();
// Allow secure cookies to work when behind a reverse proxy/ingress
app.set("trust proxy", 1);

app.use(helmet());
app.use(cors({ origin: env.frontendUrl, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.get("/health", (_req, res) => res.json({ status: "ok" }));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/subscriptions", subscriptionRoutes);
app.use("/api/v1/admin", adminRoutes);

app.use(errorHandler);

app.listen(env.port, async () => {
  await ensureAdminSeed();
  console.log(`API running on http://localhost:${env.port}`);
});
