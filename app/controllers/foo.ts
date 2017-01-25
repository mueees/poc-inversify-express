import * as express from "express";
import {Controller, Get} from "../framework/decorators";
import {injectable} from "inversify";

@Controller('/foo')
@injectable()
export class FooController {

    @Get('/')
    private index(req: express.Request): string {
        return "Hi foo!";
    }
}