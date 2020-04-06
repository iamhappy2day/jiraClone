import {
  AllowNull,
  AutoIncrement,
  Column,
  Model,
  NotEmpty,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { iUser } from '../interfaces/iUser';

@Table({
  tableName: 'user',
  timestamps: true // automatically takes care about createdAt and updatedAt
})
export default class User extends Model implements iUser {
  @AutoIncrement
  @PrimaryKey
  @Column
  id?: number;

  @Column
  name: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  email!: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  password!: string;

}
