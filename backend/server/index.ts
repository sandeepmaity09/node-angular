
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

// import winston from 'winston';

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
        // var expressWinston = require('expresss-winston');
        // var accessLogStream: WriteStream = fs.createWriteStream(logfile, { flags: "a" });
        // app.use(morgan("combined", { stream: accessLogStream }));
        // app.use(morgan('dev'));
        /*app.use(expressWinston.logger({
                transports: [
                    new winston.transports.Console({
                        json: true,
                        colorize: true
                    })
                ],
                meta: true, // optional: control whether you want to log the meta data about the request (default to true)
                msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
                expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
                colorize: false, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
                ignoreRoute: function (req, res) { return false; } // optional: allows to skip some log messages based on request and/or response
            })
        );*/
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        // this hides the error and log the error so not use this in develpment mode
        // app.use(unCoughtErrorHandler);  
    }
}
