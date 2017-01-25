import "reflect-metadata";
import {Server} from "./framework/server";
import container from "./container";

// create server
var server = new Server(container);

server
    .build()
    .listen(3000, 'localhost', function () {
        console.log('Listen 3000 port');
    });