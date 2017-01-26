import * as express from "express";

var controllerContainer: RouteContainer;

export function getRouteContainer() {
    if (!controllerContainer) {
        controllerContainer = new RouteContainer();
    }

    return controllerContainer;
}

export class RouteContainer {
    private container = {};

    public registerHandler(httpMethod: string, path: string | RegExp, target: any, middleware: Function[], callback: Function) {
        if (!this.container[target.constructor]) {
            this.container[target.constructor] = {};

            // A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.
            this.container[target.constructor].router = express.Router();
        }

        // just short link to router which was created above
        let router: express.Router = this.container[target.constructor].router;

        // router['get']('/', [], callback);
        // callback is defined in decorator, which is get Controller instance and execute appropriate method
        router[httpMethod](path, ...middleware, callback);
    }

    public registerController(path: string | RegExp, middleware: Function[], target: any) {

        /**
         * path - '/foo'
         * middleware - []
         * target = FooController
         * */
        if (this.container[target]) {
            this.container[target].path = path;
            this.container[target].middleware = middleware;
        }
    }

    public getRoutes() {
        var routes = [];

        for (var i in this.container) {
            if (this.container.hasOwnProperty(i)) {
                routes.push(this.container[i]);
            }
        }

        return routes;
    }
}