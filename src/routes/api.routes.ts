import { iRoutes } from '../interfaces/iRoutes';
import { userRouter } from '../components/users/userRoutes';
import { authRouter } from '../components/auth/authRoutes';

export const apiRoutes: iRoutes[] = [
  { url: '/api/v1/auth', router: authRouter },
  { url: '/api/v1/users', router: userRouter },

];
