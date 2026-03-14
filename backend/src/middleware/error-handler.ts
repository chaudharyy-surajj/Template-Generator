import { NextFunction, Request, Response } from "express";

// Basic error handler to normalize responses
export const errorHandler = (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  if (res.headersSent) return;
  return res.status(500).json({ message: "Internal server error" });
};
