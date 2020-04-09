import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  NotEmpty,
  PrimaryKey,
  Table
} from 'sequelize-typescript';
import { iComment } from '../interfaces/iComment';
import User from './user.model';

@Table({
  tableName: 'comments',
  timestamps: true
})
export default class Comment extends Model
  implements iComment {
  @PrimaryKey
  @AutoIncrement
  @Column
  id?: number;

  @NotEmpty
  @AllowNull(false)
  @Column
  commentBody: string;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(
    () => User,
    {onDelete: 'CASCADE', hooks: true}
  )
  user: User;
}
