
import * as express from "express";
import { Application } from "express";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";
import * as fs from "fs";
import { WriteStream } from "fs";
import * as path from "path";
import { AppConfig } from "./config/config";

import { unCoughtErrorHandler } from "./handlers/errorHandler";
import Routes from "./routes";

export default class Server {

    constructor(app: Application) {
        this.config(app);
        var routes: Routes = new Routes(app);
    }

    public config(app: Application): void {
        AppConfig();
        var logfile = path.join(__dirname, "./logs/access.log");
        if(!fs.existsSync(logfile)){
            fs.mkdirSync(__dirname+'/logs')
        }

        var accessLogStream: WriteStream = fs.createWriteStream(logfile, { flags: "a" });
        app.use(morgan("combined", { stream: accessLogStream }));
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        // this hides the error and log the error so not use this in develpment mode
        // app.use(unCoughtErrorHandler);  
    }
}
