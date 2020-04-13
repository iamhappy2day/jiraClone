import express from 'express';
import { IssuesController } from './issuesController';
import { catchErrors } from '../../errors/errorHandler';
export const issueRouter = express.Router();
const issueController = new IssuesController();

issueRouter
  .route('/')
  .get(catchErrors(issueController.getAllIssues))
  .post(catchErrors(issueController.createIssue));

issueRouter
  .route('/:id')
  .get(catchErrors(issueController.getIssueById))
  .delete(catchErrors(issueController.deleteIssue))
  .put(catchErrors(issueController.updateIssue));
