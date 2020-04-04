import express from 'express';

export const app = express();

//middleware stack
app.use(express.json());
