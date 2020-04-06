import { Model } from 'sequelize';

export interface iUser extends Model {
  id?: number | null;
  name: string;
  email: string;
  password: string;
}
