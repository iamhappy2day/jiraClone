import express from 'express';
import { CommentController } from './commentController';
import { catchErrors } from '../../errors/errorHandler';
export const commentRouter = express.Router();
const commentController = new CommentController();

commentRouter
  .route('/')
  .get(catchErrors(commentController.getAllComments))
  .post(catchErrors(commentController.createComment));

commentRouter
  .route('/:id')
  .get(catchErrors(commentController.getCommentById))
  .delete(catchErrors(commentController.deleteComment))
  .put(catchErrors(commentController.updateComment));
