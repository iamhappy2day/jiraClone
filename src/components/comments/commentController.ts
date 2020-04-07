import { CommentService } from './commentService';
import { Request, Response } from 'express';

const commentService = new CommentService();
export class CommentController {
  async getAllComments(req: Request, res: Response) {
    const comments = await commentService.getAllComments();
  }

  async getCommentById(req: Request, res: Response) {
    const targetComment = await commentService.getCommentById(
      req.params.id
    );
    res.status(200).send(targetComment);
  }

  async updateComment(req: Request, res: Response) {
    const updatedComment = await commentService.updateComment(
      req.params.id
    );
    res.status(200).send(updatedComment);
  }

  async deleteComment(req: Request, res: Response) {
    const deletedComment = await commentService.deleteComment(
      req.params.id
    );
    res.status(200).send(deletedComment);
  }
}
