import { IUserModel } from "../core/userModel";
import * as bcrypt from "bcrypt-nodejs";

export class UserRequest implements IUserModel {
	email : string;
    password : string;

	public generateHashPassword = function(password){
		this.password =  bcrypt.hashSync(password,bcrypt.genSaltSync(8));
	}

	public validPassword = function(password){
		return bcrypt.compareSync(this.password,password);
	}
}