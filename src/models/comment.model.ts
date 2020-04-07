import {AllowNull, AutoIncrement, Column, Model, NotEmpty, NotNull, PrimaryKey, Table} from "sequelize-typescript";
import {iComment} from "../interfaces/iComment";

@Table({
    tableName: 'comments',
    timestamps: true
})

export default class Comment extends Model implements iComment {

    @PrimaryKey
    @AutoIncrement
    @Column
    id?: number;

    @NotEmpty
    @AllowNull(false)
    @Column
    body: string
}
