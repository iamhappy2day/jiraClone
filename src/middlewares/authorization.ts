import { NextFunction, Request, Response } from 'express';
import { AppError } from '../errors/errorHandler';
import { config } from '../config';
import * as jwt from 'jsonwebtoken';
import User from '../models/user.model';

export async function checkAuthentification(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(
      new AppError(
        'You are not logged in! Please log in to get access',
        401
      )
    );
  }

  const decoded = await jwt.verify(
    token,
    config.JWT_SECRET
  );

  // Check if user still exists
  // @ts-ignore
  const existingUser = await User.findByPk(decoded.id);
  if (!existingUser) {
    return next(
      new AppError(
        'The user belonging to this token does no longer exists',
        401
      )
    );
  }
  next();
}
