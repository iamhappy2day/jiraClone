import Project from '../../models/project.model';
import User from "../../models/user.model";

export class ProjectService {
  async getAllProjects() {
    const projects = await Project.findAll({
        include: [User]
    });
    return projects;
  }

  async getProjectById(projectId: string) {
    const targetProject = await Project.findByPk(projectId);
    return targetProject;
  }

  async updateProject(projectId: string, updates: any) {
    const targetProject = await Project.findByPk(projectId);
    if (targetProject) {
      const updatedProject = await targetProject.update(
        updates
      );
      return updatedProject;
    }
    return;
  }

  async deleteProject(projectId: string) {
      const deletedProject = await Project.destroy({
          where: { id: projectId}
      });
      return deletedProject;
  }
}
