import { IUserModel } from '../core/userModel'

export class UserResponse implements IUserModel{
    email : string;
    password : string;
    token: string;

    constructor(email,password,token){
        this.email = email;
        this.password = password;
        this.token = token;
    }
}