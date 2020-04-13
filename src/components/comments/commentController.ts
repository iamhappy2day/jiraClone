import { CommentService } from './commentService';
import {NextFunction, Request, Response} from 'express';
import {AppError} from "../../errors/errorHandler";
const commentService = new CommentService();
export class CommentController {
  async getAllComments(req: Request, res: Response, next: NextFunction) {
    const comments = await commentService.getAllComments();
    res.status(200).send(comments);
  }

  async getCommentById(req: Request, res: Response, next: NextFunction) {
    const targetComment = await commentService.getCommentById(
      req.params.id
    );
    if (!targetComment) {
      return next(
          new AppError('No comment with this ID', 404)
      );
    }
    res.status(200).send(targetComment);
  }

  async updateComment(req: Request, res: Response, next: NextFunction) {
    const updatedComment = await commentService.updateComment(
      req.params.id,
      req.body.commentBody
    );
    if (!updatedComment) {
      return next(
          new AppError('No comment with this ID', 404)
      );
    }
    res.status(200).send(updatedComment);
  }

  async deleteComment(req: Request, res: Response, next: NextFunction) {
    const deletedComment = await commentService.deleteComment(
      req.params.id
    );
    if (!deletedComment) {
      return next(
          new AppError('No comment with this ID', 404)
      );
    }
    res.status(200).send({ deletedComment });
  }

  async createComment(req: Request, res: Response, next: NextFunction) {
    const newComment = await commentService.createComment(
      req.body.commentBody,
      req.body.userId
    );
    res.status(201).send(newComment);
  }
}
