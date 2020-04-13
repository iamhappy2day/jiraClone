import { iRoutes } from '../interfaces/iRoutes';
import { userRouter } from '../components/users/userRoutes';
import { authRouter } from '../components/auth/authRoutes';
import { projectRouter } from '../components/projects/projectRoutes';
import {commentRouter} from "../components/comments/commentRoutes";
import {issueRouter} from "../components/issues/issuesRoutes";

export const apiRoutes: iRoutes[] = [
  { url: '/api/v1/auth', router: authRouter },
  { url: '/api/v1/users', router: userRouter },
  { url: '/api/v1/projects', router: projectRouter },
  { url: '/api/v1/comments', router: commentRouter },
  { url: '/api/v1/issues', router: issueRouter }
];
