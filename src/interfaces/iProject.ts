import {Model} from "sequelize";

export interface iProject extends Model{
    id?: number | null;
    name: string;
    url: string;
    description: string;
    category: iCategory;
}

export enum iCategory {
    SOFTWARE = 'software',
    MARKETING = 'marketing',
    BUSINESS = 'business',
}
