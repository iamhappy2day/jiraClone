import express from 'express';
import { ApiRouter } from './routes/api.router';
import { apiRoutes } from './routes/api.routes';

export const app = express();
const apiRouter = new ApiRouter(express.Router(), apiRoutes)
  .getApiRouter;

//middleware stack
app.use(express.json());
app.use(apiRouter);
