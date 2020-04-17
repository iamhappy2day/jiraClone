import * as Joi from '@hapi/joi';
import { iUser } from '../interfaces/iUser';
import {
  iCategory,
  iProject
} from '../interfaces/iProject';
import { iIssue } from '../interfaces/iIssue';

// User
export const createUserValidation = (user: iUser) => {
  const schema = Joi.object({
    name: Joi.string().min(2),
    email: Joi.string()
      .email()
      .min(6),
    password: Joi.string()
      .min(3)
      .required(),
    passwordConfirm: Joi.string()
      .min(3)
      .required()
      .valid(Joi.ref('password'))
      .error(
        new Error(
          'Password and passwordConfirm are not equal'
        )
      )
  });
  return schema.validate(user);
};

export const updateUserValidation = (user: iUser) => {
  const schema = Joi.object({
    name: Joi.string().min(2),
    email: Joi.string()
      .email()
      .min(6)
  });
  return schema.validate(user);
};

// Project
export const createProjectValidation = (
  project: iProject
) => {
  const schema = Joi.object({
    description: Joi.string().min(2),
    name: Joi.string()
      .min(2)
      .required(),
    url: Joi.string().min(3),
    category: Joi.string().valid(
      'software',
      'business',
      'development'
    ),
    userId: Joi.string().required()
  });
  return schema.validate(project);
};

export const updateProjectValidation = (
  project: iProject
) => {
  const schema = Joi.object({
    description: Joi.string().min(2),
    name: Joi.string().min(2),
    url: Joi.string().min(3),
    category: Joi.string().valid(
      'software',
      'business',
      'development'
    )
  });
  return schema.validate(project);
};

//Issue
export const createIssueValidation = (issue: iIssue) => {
  const schema = Joi.object({
    estimate: Joi.string().min(2),
    title: Joi.string()
      .min(2)
      .required(),
    description: Joi.string()
      .min(3)
      .required(),
    status: Joi.string()
      .valid('backlog', 'in progress', 'done')
      .required(),
    priority: Joi.string().valid(
      'highest',
      'high',
      'medium',
      'low',
      'lowest'
    ),
    type: Joi.string()
      .valid('story', 'task', 'bug')
      .required(),
    reporterId: Joi.string().required()
  });
  return schema.validate(issue);
};

export const updateIssueValidation = (issue: iIssue) => {
  const schema = Joi.object({
    estimate: Joi.string().min(2),
    title: Joi.string().min(2),
    description: Joi.string().min(3),
    status: Joi.string().valid(
      'backlog',
      'in progress',
      'done'
    ),
    priority: Joi.string().valid(
      'highest',
      'high',
      'medium',
      'low',
      'lowest'
    ),
    type: Joi.string().valid('story', 'task', 'bug'),
    reporterId: Joi.string()
  });
  return schema.validate(issue);
};

//Comment

// Reset password
interface iReset {
  token: string;
  password: string;
  passwordConfirm: string;
}

export const resetPasswordValidation = (
  resetPasswordData: iReset
) => {
  const schema = Joi.object({
    token: Joi.string(),
    password: Joi.string()
      .min(3)
      .required(),
    passwordConfirm: Joi.string()
      .min(3)
      .required()
      .valid(Joi.ref('password'))
      .error(
        new Error(
          'Password and confirmPassword are not equal'
        )
      )
  });
  return schema.validate(resetPasswordData);
};
