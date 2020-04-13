import express from 'express';
import { IssuesController } from './issuesController';
export const issueRouter = express.Router();
const issueController = new IssuesController();

issueRouter
    .route('/')
    .get(issueController.getAllIssues)
    .post(issueController.createIssue);

issueRouter
    .route('/:id')
    .get(issueController.getIssueById)
    .delete(issueController.deleteIssue)
    .put(issueController.updateIssue);
