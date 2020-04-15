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
import {
  iCategory,
  iProject
} from '../interfaces/iProject';
import User from './user.model';
import UserProject from './userProject.model';
import Issue from './issue.model';

@Table({
  tableName: 'project',
  timestamps: true
})
export default class Project extends Model
  implements iProject {
  @AutoIncrement
  @PrimaryKey
  @Column
  id?: number;

  @Column
  category: iCategory;

  @Column
  description: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  name: string;

  @Column
  url: string;

  @BelongsToMany(
    () => User,
    () => UserProject
  )
  users: User[]

  @HasMany(() => Issue)
  issues: Issue[];
}
