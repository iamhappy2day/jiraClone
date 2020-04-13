import {
  AllowNull,
  AutoIncrement,
  BelongsToMany,
  Column,
  HasMany,
  Model,
  NotEmpty,
  PrimaryKey,
  Table
} from 'sequelize-typescript';
import { iUser } from '../interfaces/iUser';
import Project from './project.model';
import UserProject from './userProject.model';
import Comment from './comment.model';
import UserIssue from './userIssue.model';
import Issue from './issue.model';

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

  @BelongsToMany(
    () => Project,
    () => UserProject
  )
  projects: Project[];

  @HasMany(() => Comment)
  comments: Comment[];

  @BelongsToMany(
    () => Issue,
    () => UserIssue
  )
  issues: Issue[];
}
