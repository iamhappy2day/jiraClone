import { iIssue } from '../../interfaces/iIssue';
import Issue from '../../models/issue.model';
import User from '../../models/user.model';

export class IssueService {
  async getAllIssues() {
    const issues = await Issue.findAll({ include: [User] });
    return issues;
  }
  async getIssueById(issueId: string) {
    const targetIssue = await Issue.findByPk(issueId);
    return targetIssue;
  }

  async updateIssue(issueId: string, updates: iIssue) {
    const targetIssue = await Issue.findByPk(issueId);
    if (targetIssue) {
      targetIssue.update(updates);
      await targetIssue.save();
      return targetIssue;
    }
    return 'there is no such comment';
  }

  async deleteIssue(issueId: string) {
    const deletedIssue = await Issue.destroy({
      where: { id: issueId }
    });
    return deletedIssue;
  }

  async createIssue(issueBody: iIssue) {
    const newIssue = await Issue.create({
      type: issueBody.type,
      estimate: issueBody.estimate,
      title: issueBody.title,
      description: issueBody.description,
      status: issueBody.status,
      priority: issueBody.priority,
      reporterId: issueBody.reporterId
    });
    if (issueBody.userId) {
      await newIssue.$set('users', issueBody.userId);
    }
    return newIssue;
  }
}
