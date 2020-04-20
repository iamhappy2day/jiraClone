import * as jwt from 'jsonwebtoken';
import { config } from '../config';

export async function signToken(id: number | undefined) {
  const token = await jwt.sign(
    { id: id },
    config.JWT_SECRET,
    {
      expiresIn: config.JWT_EXPIRES_IN
    }
  );
  return token;
}
