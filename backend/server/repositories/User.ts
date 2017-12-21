import { Document, Schema, Model, model } from "mongoose";
import * as bcrypt from 'bcrypt-nodejs';
import { IUser } from "../models/UserModel";

export interface IUserModel extends IUser, Document {
	fullName(): string;
}

export var UserSchema: Schema = new Schema({
	local : {
		email : String,
		password : String
	},
	facebook : {
		id : String,
		token : String,
		name : String,
		email : String
	},
	twitter : {
		id : String,
		token : String,
		name : String,
		email : String
	},
	google : {
		id : String,
		token : String,
		email : String,
		name : String
	}
});

UserSchema.methods.generateHash = function(password){
	return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null);
}

userSchema.methods.validPassword = function(password){
	return bcrypt.compareSync(password,this.local.password);
}

// userSchema.methods.fullName

export const User: Model<IUserModel> = model<IUserModel>("User",UserSchema);

