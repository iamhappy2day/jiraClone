import {AllowNull, AutoIncrement, Column, Model, NotEmpty, PrimaryKey, Table} from "sequelize-typescript";
import {iProject} from "../interfaces/iProject";


@Table({
    tableName: 'project',
    timestamps: true
})
export default class Project extends Model implements iProject{
    @AutoIncrement
    @PrimaryKey
    @Column
    id?: number;

    @Column
    category: string;

    @Column
    description: string;

    @AllowNull(false)
    @NotEmpty
    @Column
    name: string;

    @Column
    url: string;

}
