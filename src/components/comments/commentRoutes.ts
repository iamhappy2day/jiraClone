import express from 'express';
import { CommentController } from './commentController';
export const commentRouter = express.Router();
const commentController = new CommentController();

commentRouter
  .route('/')
  .get(commentController.getAllComments)
  .post(commentController.createComment);

commentRouter
  .route('/:id')
  .get(commentController.getCommentById)
  .delete(commentController.deleteComment)
  .put(commentController.updateComment);
