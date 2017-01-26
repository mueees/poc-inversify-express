import * as express from "express";
import {getContainer} from "./container-storage";
import {getRouteContainer} from "./route-container";

export function Controller(path: string | RegExp, ...middleware: Function[]) {
    return function (target: any) {
        getRouteContainer().registerController(path, middleware, target);
    }
}

export function All(path: string | RegExp, ...middleware: Function[]) {
    return Method('all', path, ...middleware);
}
export function Get(path: string | RegExp, ...middleware: Function[]) {
    return Method('get', path, ...middleware);
}
export function Post(path: string | RegExp, ...middleware: Function[]) {
    return Method('post', path, ...middleware);
}
export function Put(path: string | RegExp, ...middleware: Function[]) {
    return Method('put', path, ...middleware);
}
export function Patch(path: string | RegExp, ...middleware: Function[]) {
    return Method('patch', path, ...middleware);
}
export function Head(path: string | RegExp, ...middleware: Function[]) {
    return Method('head', path, ...middleware);
}
export function Delete(path: string | RegExp, ...middleware: Function[]) {
    return Method('delete', path, ...middleware);
}
export function Method(method: string, path: string | RegExp, ...middleware: Function[]) {
    return function (target: any, key: string, value: any) {
        getRouteContainer().registerHandler(method, path, target, middleware, (req: express.Request, res: express.Response, next: any) => {
            var result = getContainer().get(target.constructor.name)[key](req, res, next);

            if (result || !res.headersSent) {
                res.send(result);
            }
        });
    }
}