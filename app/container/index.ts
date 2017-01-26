import {ProductController} from "../controllers/products";
import {HomeController} from "../controllers/home";
import {Container} from "inversify";

// set up container
var container = new Container();

container.bind<ProductController>('ProductController').to(ProductController);
container.bind<HomeController>('HomeController').to(HomeController);

export default container;