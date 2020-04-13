import User from "../models/user.model";

export interface iIssue {
  id?: number | null;
  type: iIssueType;
  estimate: string;
  title: string;
  description: string;
  status: iIssueStatus;
  priority: iIssuePriority;
  reporterId: string;
  userId?: string
}

export enum iIssueStatus {
  BACKLOG = 'backlog',
  IN_PROGRESS = 'in progress',
  DONE = 'done'
}

export enum iIssuePriority {
  HIGHEST = 'highest',
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low',
  LOWEST = 'lowest'
}
export enum iIssueType {
    STORY = 'story',
    TASK = 'task',
    BUG = 'bug',
}
