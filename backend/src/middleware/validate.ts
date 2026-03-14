import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

export const validate = (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
  const parsed = schema.safeParse({ body: req.body, query: req.query, params: req.params });
  if (!parsed.success) {
    const issues = parsed.error.issues.map(issue => issue.message);
    return res.status(400).json({ message: "Validation error", issues });
  }
  req.body = parsed.data.body ?? req.body;
  req.query = parsed.data.query ?? req.query;
  req.params = parsed.data.params ?? req.params;
  return next();
};
