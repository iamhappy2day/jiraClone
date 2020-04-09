import { iComment } from '../../interfaces/iComment';
import Comment from '../../models/comment.model';
import User from '../../models/user.model';
export class CommentService {
  async getAllComments() {
    const comments = await Comment.findAll({
      include: [User]
    });
    return comments;
  }
  async getCommentById(commentId: string) {
    const targetComment = await Comment.findByPk(commentId);
    return targetComment;
  }
  async updateComment(
    commentId: string,
    commentBody: string
  ) {
    const targetComment = await Comment.findByPk(commentId);
    if (targetComment) {
      targetComment.commentBody = commentBody;
      await targetComment.save();
      return targetComment;
    }
    return 'there is no such comment';
  }
  async deleteComment(commentId: string) {
    const deletedComment = await Comment.destroy({
      where: { id: commentId }
    });
    return deletedComment;
  }
  async createComment(commentBody: iComment, userId: string) {
    const newComment = await Comment.create({
      commentBody: commentBody,
      userId: userId
    });
    return newComment;
  }
}
