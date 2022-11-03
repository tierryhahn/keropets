import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const isOngMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  if (!authorization)
    return res.status(401).json({ message: "Missing token!" });

  const token = authorization.split(" ")[1];

  const { isOng } = jwt.decode(token) as { isOng: boolean };

  if (!isOng)
    return res.status(403).json({ message: "It's not a ong" });

  next();
};

export { isOngMiddleware };