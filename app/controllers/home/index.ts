import * as express from "express";
import {Controller, Get} from "../../server";
import {injectable} from "inversify";

@Controller('/')
@injectable()
export class HomeController {
    @Get('/')
    private home(req: express.Request, res: express.Respose) {
        res.send("Welcome");
    }
}