import Project from "../../models/project.model";

export class ProjectService {
    async getAllProjects() {
        const projects = await Project.findAll()
        return projects;
    }
}
