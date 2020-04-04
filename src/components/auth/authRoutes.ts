import express from 'express';
import { AuthController } from './authController';
const authController = new AuthController();
export const authRouter = express.Router();
