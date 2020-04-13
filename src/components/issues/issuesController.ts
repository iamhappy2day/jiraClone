import { Request, Response } from 'express';
import { IssueService } from './issuesService';

const issueService = new IssueService();

export class IssuesController {
  async getAllIssues(req: Request, res: Response) {
    const issues = await issueService.getAllIssues();
    res.status(200).send(issues);
  }

  async getIssueById(req: Request, res: Response) {
    const targetIssue = await issueService.getIssueById(
      req.params.id
    );
    res.status(200).send(targetIssue);
  }

  async updateIssue(req: Request, res: Response) {
    const updatedIssue = await issueService.updateIssue(
      req.params.id,
      req.body
    );
    res.status(200).send(updatedIssue);
  }

  async deleteIssue(req: Request, res: Response) {
    const deletedIssue = await issueService.deleteIssue(
      req.params.id
    );
    res.status(200).send({ deletedIssue });
  }

  async createIssue(req: Request, res: Response) {
    const newIssue = await issueService.createIssue(
      req.body
    );
    res.status(201).send(newIssue);
  }
}
