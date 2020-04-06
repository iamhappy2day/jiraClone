import { Response, Request } from 'express';
import { UserService } from './userService';
import User from '../../models/user.model';
const userService = new UserService();

export class UserController {
  async getAllUsers(req: Request, res: Response) {
    const users = await userService.getAllUsers();
    res.status(200).send(users);
  }

  async getUserById(req: Request, res: Response) {
    const targetUser = await userService.getUserById(
      req.params.id
    );
    res.status(200).send(targetUser);
  }

  async createUser(req: Request, res: Response) {
    const newUser = new User({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name
    });
    newUser.save();
    res.status(201).send(newUser);
  }

  async updateUser(req: Request, res: Response) {
    const updatedUser = await userService.updateUser(
      req.params.id,
      req.body
    );
    res.status(200).send(updatedUser);
  }

  async deleteUser(req: Request, res: Response) {
    const deletedUser = await userService.deleteUser(
      req.params.id
    );
    res.status(200).send({
      deletedUser
    });
  }
}
