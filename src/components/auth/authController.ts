import { NextFunction, Request, Response } from 'express';
import { createUserValidation } from '../../middlewares/validation';
import { AppError } from '../../errors/errorHandler';
import { AuthService } from './authService';
import User from '../../models/user.model';
import * as bcrypt from 'bcryptjs';
import { signToken } from '../../middlewares/signToken';
const authService = new AuthService();

export class AuthController {
  async createUser(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { error } = createUserValidation(req.body);
    if (error) {
      return next(new AppError(error.message, 500));
    }

    const newUser = await authService.createUser(req.body);

    res.status(201).send({
      status: 'success',
      user: newUser
    });
  }

  async userLogin(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(
        new AppError(
          'Provide email and password please',
          400
        )
      );
    }
    const targetUser = await User.findOne({
      where: { email: req.body.email }
    });
    if (!targetUser) {
      return next(
        new AppError(
          'There is no user with this email',
          401
        )
      );
    }

    const correctPassword = await bcrypt.compare(
      req.body.password,
      targetUser.password
    );
    if (!correctPassword) {
      return next(
        new AppError('Wrong password. Try again', 401)
      );
    }
    const token = await signToken(targetUser.id);

    res.status(200).send({
      status: 'success',
      user: targetUser,
      token: token
    });
  }
}
