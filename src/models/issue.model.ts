import {
  AllowNull,
  AutoIncrement, BelongsTo,
  BelongsToMany,
  Column,
  DataType, ForeignKey, HasMany,
  Model,
  NotEmpty,
  PrimaryKey,
  Table
} from 'sequelize-typescript';
import {
  iIssue,
  iIssuePriority,
  iIssueStatus,
  iIssueType
} from '../interfaces/iIssue';
import User from './user.model';
import UserProject from './userProject.model';
import UserIssue from './userIssue.model';
import Project from "./project.model";
import Comment from "./comment.model";

@Table({
  tableName: 'issues',
  timestamps: true
})
export default class Issue extends Model implements iIssue {
  @AutoIncrement
  @PrimaryKey
  @Column
  id?: number;

  @AllowNull(false)
  @NotEmpty
  @Column
  type: iIssueType;

  @Column
  estimate: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  title: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  description: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  status: iIssueStatus;

  @AllowNull(false)
  @NotEmpty
  @Column
  priority: iIssuePriority;

  @AllowNull(false)
  @NotEmpty
  @Column
  reporterId: string;

  @BelongsToMany(
    () => User,
    () => UserIssue
  )
  users: User[];

  @ForeignKey(() => Project)
  @Column
  projectId: number;

  @BelongsTo(
      () => Project,
      {onDelete: 'CASCADE', hooks: true}
  )
  project: Project;

  @HasMany(() => Comment)
  comments: Comment[];
}
