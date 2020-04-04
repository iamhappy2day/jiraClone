import express from "express";

export interface iRoutes {
    url: string,
    router: express.Router
}
