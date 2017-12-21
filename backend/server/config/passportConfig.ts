// We will be handling login and signup in config 

// let LocalStrategy = require('passport-local').Strategy;
// let User = require('../models/User');

// module.exports = function(passport){

// }

import * as passport from "passport";
import * as passportLocal from "passport-local";
import { Request, Response, NextFunction } from "express";

import { User } from "../repositories/User";

const LocalStrategy = passportLocal.Strategy;

passport.serializeUser<any,any>((user,done)=>{
	done(undefined,user.id);
});

passport.deserializeUser((id,done)=>{
	User.findById(err,user) => {
		done(err,user);
	}
});

// Sign in using Email and Password

passport.use('local-login',new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password',
	passReqToCallback: true
},
(req,email,password,done)=>{
	User.findOne({'local.email':email},(error,user)=>{
		if(error)
			return done(err);
		if(!user)
			return done(null,false);
		if(!user.validPassword(password))
			return done(null,false);
		return done(null,user);
	})
}));

passport.use('local-signup',new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password',
	passReqToCallback: true
},
(req,email,password,done)=>{
	process.nextTick(()=>{
		User.findOne({'local.email':email},(error,user)=>{
			if(err)
				return done(error);
			if(user){
				return done(null,false,req.flash('signupMessage','User already exist'))
			} else {
				let newUser = new User();
				newUser.local.email = email;
				newUser.local.password = newUser.generateHash(password);
				newUser.save((error)=>{
					if(error)
						throw error;
					return done(null,newUser);
				})
			}
		})
	})
}));


