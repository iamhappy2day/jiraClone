import Project from "../../models/project.model";

export class ProjectService {
    async getAllProjects() {
        const projects = await Project.findAll();
        return projects;
    }

    async getProjectById(projectId: string) {
        
    }

    async updateProject(id: string, body: any) {
        
    }

    async deleteProject(id: string) {
        
    }
}
