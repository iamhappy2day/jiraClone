import { Response, Request } from 'express';
import {ProjectService} from "./projectService";

const projectService = new ProjectService();

export class ProjectController {
    async getAllProjects(req:Request, res: Response) {
        const projects = await projectService.getAllProjects()
        res.status(200).send(projects)
    }
}
