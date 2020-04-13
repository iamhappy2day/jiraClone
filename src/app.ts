import express, {
  NextFunction,
  Request,
  Response
} from 'express';
import { ApiRouter } from './routes/api.router';
import { apiRoutes } from './routes/api.routes';
import { checkIfRouteExists } from './middlewares/checkIfRouteExists';
import { errorHandler } from './errors/errorHandler';

export const app = express();
const apiRouter = new ApiRouter(express.Router(), apiRoutes)
  .getApiRouter;

//middleware stack
app.use(express.json());
app.use(apiRouter);
app.all('*', checkIfRouteExists);

app.use(errorHandler);
