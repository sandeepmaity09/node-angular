/*import { Document, Schema, Model, model } from "mongoose";
import * as bcrypt from 'bcrypt-nodejs';
import { IUser } from "../models/UserModel";

export interface IUserModel extends IUser, Document {
	validPassword(password,locpassword);
	generateHash(password);
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
};

UserSchema.methods.validPassword = function(password,locpassword){
	return bcrypt.compareSync(password,locpassword);
}

// userSchema.methods.fullName

export const User: Model<IUserModel> = model<IUserModel>("User",UserSchema);

*/