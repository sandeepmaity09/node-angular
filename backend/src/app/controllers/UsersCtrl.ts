import { NextFunction, Request, Response, Router } from 'express';
import { apiErrorHandler } from '../../handlers/errorHandler';
import UsersRepo from '../repositories/UsersRepo';
import { UserRequest } from '../models/request/userRequest';
import { UserResponse } from '../models/response/userResponse';

export default class UsersRoutes {

    constructor() { }

    public signup(req: Request, res: Response, next: NextFunction) {

        let user: UserRequest = new UserRequest();
        user.email = req.body.email;
        user.generateHashPassword(req.body.password);

        UsersRepo.signup(user)
            .then((result:any) => {
                let datapack: UserResponse = new UserResponse(result.dataValues.email,result.dataValues.password);
                res.json(datapack);
            })
            .catch((err) => { 
                console.log('creation of new user failed', err) 
            });
    }

    public login(req: Request, res: Response, next: NextFunction) {
        
    }
}
