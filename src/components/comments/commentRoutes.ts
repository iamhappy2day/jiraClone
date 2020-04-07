import express from 'express';
const commentRouter = express.Router();

commentRouter.route('/').get();
