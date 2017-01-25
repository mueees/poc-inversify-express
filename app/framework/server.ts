import * as express from "express";
import {getContainer} from "./route-container";
import {setKernel} from "./kernel";

export class Server {
    private app: express.Application = express();

    constructor(kernel) {
        setKernel(kernel)
    }

    build(): express.Application {
        this.useRoutes();

        return this.app;
    }

    private useRoutes() {
        getContainer().getRoutes().forEach((route) => {
            this.app.use(route.path || '*', ...(route.middleware || []), route.router);
        });
    }
}