
import { Application, Request, Response, NextFunction, Router } from "express";


import UsersCtrl from "../controllers/UsersCtrl";

export default class Routes {

    usersCtrl = new UsersCtrl();

    constructor(app: Application) {
        app.route('/api/signup').post(this.usersCtrl.signup);
    }

}