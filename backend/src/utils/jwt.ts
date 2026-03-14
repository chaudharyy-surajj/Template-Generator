import jwt from "jsonwebtoken";
import { env } from "../config/env";
import { Role } from "../types/common";

export interface JwtPayload {
  sub: string;
  email: string;
  role: Role;
}

export const signToken = (payload: JwtPayload) => {
  return jwt.sign(payload, env.jwtSecret, { expiresIn: "7d" });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, env.jwtSecret) as JwtPayload;
};
