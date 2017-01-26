import * as express from "express";
import {getRouteContainer} from "./route-container";
import {setContainer} from "./container-storage";

export class Server {
    private app: express.Application = express();

    constructor(kernel) {
        setContainer(kernel)
    }

    build(): express.Application {
        this.useRoutes();

        return this.app;
    }

    private useRoutes() {
        getRouteContainer().getRoutes().forEach((route) => {
            this.app.use(route.path || '*', ...(route.middleware || []), route.router);
        });
    }
}