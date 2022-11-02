import { Response } from "express";

export class AppError extends Error {

    statusCode: number;

    constructor(message: string, statusCode: number = 400) {
        super()
        this.message = message
        this.statusCode = statusCode
    }
}
export const handleError = (err: AppError, resp: Response) => {
    const { statusCode, message } = err;
    return resp.status(statusCode).json({
      ststus: "error",
      statusCode,
      message,
    });
  };