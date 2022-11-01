import { Response } from "express";

export class AppError extends Error {

    statusCode

    constructor(statusCode: number, message: string) {
        super()
        this.statusCode = statusCode
        this.message = message
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