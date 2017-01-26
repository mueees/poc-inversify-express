import {ProductController} from "../controllers/products";
import {Container} from "inversify";

// set up container
var container = new Container();

container.bind<ProductController>('ProductController').to(ProductController);

export default container;