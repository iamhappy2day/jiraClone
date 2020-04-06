import {
    Column,
    ForeignKey,
    Model, Table
} from 'sequelize-typescript';
import User from './user.model';
import Project from './project.model';
import {iUserProject} from "../interfaces/iUserProject";

@Table({
    tableName: 'userProject'
})
export default class UserProject extends Model
  implements iUserProject {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Project)
  @Column
  projectId: number;
}
