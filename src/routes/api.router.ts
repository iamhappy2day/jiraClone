import express from 'express';
import { iRoutes } from '../interfaces/iRoutes';

export class ApiRouter {
  constructor(
    readonly router: express.Router,
    private routes: iRoutes[]
  ) {
    this.router = router;
    this.routes = routes;
    this.setupApiRoutes(routes);
  }

  get getApiRouter() {
    return this.router;
  }

  setupApiRoutes(routes: iRoutes[]) {
    routes.forEach((route: iRoutes) => {
      this.addApiRoute(route.url, route.router);
    });
  }

  addApiRoute(routeUrl: string, router: express.Router) {
    this.router.use(routeUrl, router);
  }
}
