import {Column, ForeignKey, Model, Table} from "sequelize-typescript";
import User from "./user.model";
import Issue from "./issue.model";
import {iUserIssue} from "../interfaces/iUserIssue";

@Table({
    tableName: 'userIssue',
})

export default class UserIssue extends Model
    implements iUserIssue {
    @ForeignKey(() => User)
    @Column
    userId: number;

    @ForeignKey(() => Issue)
    @Column
    issueId: number;
}
