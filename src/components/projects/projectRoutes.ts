import express from 'express';
import { ProjectController } from './projectController';

export const projectRouter = express.Router();
const projectController = new ProjectController();

projectRouter
  .route('/')
  .get(projectController.getAllProjects)
  .post(projectController.createProject);

projectRouter
  .route('/:id')
  .get(projectController.getProjectById)
  .put(projectController.updateProject)
  .delete(projectController.deleteProject);
