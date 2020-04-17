import { NextFunction, Request, Response } from 'express';
import { IssueService } from './issuesService';
import { AppError } from '../../errors/errorHandler';
import {createIssueValidation, updateIssueValidation} from '../../middlewares/validation';

const issueService = new IssueService();

export class IssuesController {
  async getAllIssues(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const issues = await issueService.getAllIssues();
    res.status(200).send(issues);
  }

  async getIssueById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const targetIssue = await issueService.getIssueById(
      req.params.id
    );
    if (!targetIssue) {
      return next(
        new AppError('No issue with this ID', 404)
      );
    }
    res.status(200).send(targetIssue);
  }

  async updateIssue(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { error } = updateIssueValidation(req.body);
    if (error) {
      return next(new AppError(error.message, 400));
    }

    const updatedIssue = await issueService.updateIssue(
      req.params.id,
      req.body
    );
    if (!updatedIssue) {
      return next(
        new AppError('No issue with this ID', 404)
      );
    }
    res.status(200).send(updatedIssue);
  }

  async deleteIssue(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const deletedIssue = await issueService.deleteIssue(
      req.params.id
    );
    if (!deletedIssue) {
      return next(
        new AppError('No issue with this ID', 404)
      );
    }
    res.status(200).send({ deletedIssue });
  }

  async createIssue(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { error } = createIssueValidation(req.body);
    if (error) {
      return next(new AppError(error.message, 400));
    }
    const newIssue = await issueService.createIssue(
      req.body
    );
    res.status(201).send(newIssue);
  }
}
