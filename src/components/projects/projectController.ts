import { Response, Request } from 'express';
import { ProjectService } from './projectService';
import User from '../../models/user.model';
import Project from '../../models/project.model';

const projectService = new ProjectService();

export class ProjectController {
  async getAllProjects(req: Request, res: Response) {
    const projects = await projectService.getAllProjects();
    res.status(200).send(projects);
  }

  async getProjectById(req: Request, res: Response) {
    const targetProject = await projectService.getProjectById(
      req.params.id
    );
    res.status(200).send(targetProject);
  }

  async createProject(req: Request, res: Response) {
    const newProject = new Project({
      category: req.body.category,
      description: req.body.description,
      name: req.body.name,
      url: req.body.url
    });
    newProject.save();
    res.status(201).send(newProject);
  }

  async updateProject(req: Request, res: Response) {
    const updatedUser = await projectService.updateProject(
      req.params.id,
      req.body
    );
    res.status(200).send(updatedUser);
  }

  async deleteProject(req: Request, res: Response) {
    const deletedProject = await projectService.deleteProject(
      req.params.id
    );
    res.status(200).send({
      deletedProject
    });
  }
}
