import User from '../../models/user.model';
import { iUser } from '../../interfaces/iUser';
import Project from "../../models/project.model";
import Comment from "../../models/comment.model";
export class UserService {
  async getAllUsers() {
    const users = await User.findAll({include: [Project, Comment]});
    return users;
  }

  async getUserById(id: string) {
    const user = await User.findByPk(id);
    return user;
  }

  async updateUser(userId: string, updates: iUser) {

    const targetUser = await User.findByPk(userId);
    if(targetUser) {
      const updatedUser = targetUser.update(updates)
      return updatedUser
    } else {
      throw Error('There is no user with this id')
    }

  }

  async deleteUser(userId: string) {
    const deletedUser = User.destroy({
      where: { id: userId}
    })
    return deletedUser
  }
}
