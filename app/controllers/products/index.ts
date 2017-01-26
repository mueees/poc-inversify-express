import * as express from "express";
import {Controller, Get} from "../../server";
import {injectable} from "inversify";

@Controller('/products')
@injectable()
export class ProductController {
    @Get('/')
    private products(req: express.Request, res: express.Respose) {
        res.send("Products list");
    }

    @Get('/:id')
    private product(req: express.Request, res: express.Respose) {
        res.send("Product " + req.params.id);
    }
}