import { NextFunction, Request, Response, Router } from 'express';
import { LocalStrategy } from 'passport-local';
import { User } from '../repositories/User';

export default class UserCtrl {
	constructor(){}

	login(req: Request, res: Response, next: NextFunction){
	}

	register(req: Request, res: Response, next: NextFunction){
		let newUser = new User(req.body);
		console.log(req.body);
		let name = req.body.name;
		let password = req.body.password;
		
	}
}