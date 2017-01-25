import {FooController} from "../controllers/foo";
import {Container} from "inversify";

// set up kernel
var container = new Container();
container.bind<FooController>('FooController').to(FooController);

export default container;