import { NextFunction, Request, Response, Router } from 'express';
import { apiErrorHandler } from '../../handlers/errorHandler';
import UsersRepo from '../repositories/UsersRepo';
import { UserRequest } from '../models/request/userRequest';
import { UserResponse } from '../models/response/userResponse';

import { User } from '../../db/dbmongo/schemas/Users';

import { UserValidator } from '../validators/userValidator';

import * as jwt from 'jwt-simple';
import * as moment from 'moment';

export default class UsersRoutes {

    constructor() { }

    public signup(req: Request, res: Response, next: NextFunction) {

        let newuserReq: UserRequest = new UserRequest();
        newuserReq.email = req.body.email;
        newuserReq.password = req.body.password;

        // user.generateHashPassword(req.body.password);
        console.log(newuserReq);
        console.log(!UserValidator.isValidEmail(newuserReq.email));
        console.log(UserValidator.isValidPassword(newuserReq.password));

        if (!UserValidator.isValidEmail(newuserReq.email) || UserValidator.isValidPassword(newuserReq.password)) {
            res.status(400);
            res.json({ message: 'wrong input' });
        }


        let secret = 'helloworld';
        let expires = moment().utc().add({ days: 7 }).unix();
        let token = jwt.encode({ exp: expires, email: newuserReq.email }, secret);

        // UsersRepo.signup(user)
        //     .then((result:any) => {
        //         let datapack: UserResponse = new UserResponse(result.dataValues.email,result.dataValues.password,token);
        //         res.json(datapack);
        //     })
        //     .catch((err) => { 
        //         console.log('creation of new user failed', err) 
        //     });
        console.log('code before the user.findByEmail');
        
        User.findByEmail(newuserReq.email, (err, user) => {
            if (err) {
                res.status(500);
                res.json({
                    success: false,
                    message: 'something went wrong.'
                });
            } else if (!user) {
                const user = new User({
                    email: newuserReq.email,
                    password: newuserReq.password,
                });

                User.createUser(user, (err, user) => {
                    if (err) {
                        res.status(500);
                        res.json({
                            success: false,
                            message: 'something went wrong.'
                        });
                    } else {
                        res.json(user);
                    }
                });
            } else {
                res.status(400);
                res.json({
                    success: false,
                    message: 'this email address has already been taken.'
                });
            }
        });
    }

    public login(req: Request, res: Response, next: NextFunction) {

    }
}
