import express from 'express';
import { ProjectController } from './projectController';
import {catchErrors} from "../../errors/errorHandler";

export const projectRouter = express.Router();
const projectController = new ProjectController();

projectRouter
  .route('/')
  .get(catchErrors(projectController.getAllProjects))
  .post(catchErrors(projectController.createProject));

projectRouter
  .route('/:id')
  .get(catchErrors(projectController.getProjectById))
  .put(catchErrors(projectController.updateProject))
  .delete(catchErrors(projectController.deleteProject));
