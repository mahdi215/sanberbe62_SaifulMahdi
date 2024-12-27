import { Request, Response, NextFunction } from "express";

// Middleware for handling 404 errors (Not Found)
export const errorNotFoundMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(404).json({
    success: false,
    message: "Resource not found",
  });
};

// Middleware for handling server errors
export const errorServerMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack); // Log the error stack for debugging

  res.status(500).json({
    success: false,
    message: "Internal server error",
    error: err.message, // Optional: Include error message for debugging
  });
};
