import { Response, Request, NextFunction } from 'express';
import { ProjectService } from './projectService';
import Project from '../../models/project.model';
import {AppError} from "../../errors/errorHandler";
import {createProjectValidation, updateProjectValidation} from "../../middlewares/validation";

const projectService = new ProjectService();

export class ProjectController {
  async getAllProjects(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const projects = await projectService.getAllProjects();
    res.status(200).send(projects);
  }

  async getProjectById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const targetProject = await projectService.getProjectById(
      req.params.id
    );
    if (!targetProject) {
      return next(
          new AppError('No project with this ID', 404)
      );
    }
    res.status(200).send(targetProject);
  }

  async createProject(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const {error} = createProjectValidation(req.body);
    if (error) {
      return next(new AppError(error.message, 400))
    }
    const newProject = await Project.create({
      category: req.body.category,
      description: req.body.description,
      name: req.body.name,
      url: req.body.url
    });

    if (req.body.userId) {
      await newProject.$set('users', req.body.userId);
    }
    res.status(201).send(newProject);
  }

  async updateProject(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const {error} = updateProjectValidation(req.body);
    if (error) {
      return next(new AppError(error.message, 400))
    }
    const updatedProject = await projectService.updateProject(
      req.params.id,
      req.body
    );
    if (!updatedProject) {
      return next(
          new AppError('No project with this ID', 404)
      );
    }
    res.status(200).send(updatedProject);
  }

  async deleteProject(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const deletedProject = await projectService.deleteProject(
      req.params.id
    );
    if (!deletedProject) {
      return next(
          new AppError('No project with this ID', 404)
      );
    }
    res.status(200).send({
      deletedProject
    });
  }
}
