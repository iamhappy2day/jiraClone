import User from '../../models/user.model';
import { iUser } from '../../interfaces/iUser';

export class AuthService {
  async createUser(userInfo: iUser) {
    const newUser = await User.create({
      email: userInfo.email,
      password: userInfo.password,
      passwordConfirm: userInfo.passwordConfirm,
      name: userInfo.name
    });

    return newUser;
  }
}
