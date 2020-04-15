import { NextFunction, Request, Response } from 'express';
import {config} from "../config";

export class AppError extends Error {
  private status: string;
  private statusCode: number;
  private isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4')
      ? 'fail'
      : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  err.statusCode = err.statusCode || 500;

  err.status = err.status || 'fail';
  if (config.APP_STATUS === 'development') {
    res.status(err.statusCode).send({
      status: err.status,
      message: err.message,
      stack: err.stack
    });
  } else if (config.APP_STATUS === 'production') {
    res.status(err.statusCode).send({
      status: err.status,
      message: err.message
    });
  }
}

export function catchErrors(
  func: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<any>
) {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      return await func(req, res, next);
    } catch (e) {
      next(e);
    }
  };
}
