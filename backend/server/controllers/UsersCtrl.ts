import { NextFunction, Request, Response, Router } from 'express';
import { apiErrorHandler } from '../handlers/errorHandler';
import UsersRepo from '../repositories/UsersRepo';
import { User } from '../models/Users';

export default class UsersRoutes {

    constructor() { }

    create(req: Request, res: Response, next: NextFunction) {
    	console.log(req.body);
    	// console.log(req['value']);
    	// res.send('trying to login');
        var user:User = new User();
        user.name = req.body.name;
        user.password = req.body.password;

        console.log('this is the user data',req.body.name,req.body.password);
        
        UsersRepo.signup(user)
                .then((result)=>{res.json(result)})
                .catch((err)=>{console.log('creation of new user failed',err)});
        
        // UsersRepo.signup(req['body'])
        //     .then((result) => { res.json(result); console.log('here is the error in then')})
        //     .catch((err) => { 
        //     	// apiErrorHandler(err, req, res, "Creation of Lesson failed."); 
        //     	console.log('here is the error');
        //     });
    }
}
