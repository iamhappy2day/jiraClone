import Project from "../../models/project.model";
import express from 'express'
import {ProjectController} from "./projectController";

const projectRouter = express.Router();
const projectController = new ProjectController();

projectRouter.route('/').get(projectController.getAllProjects);
