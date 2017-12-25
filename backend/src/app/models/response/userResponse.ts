import { IUserModel } from '../core/userModel'

export class UserResponse implements IUserModel{
    email : string;
    password : string;

    constructor(email,password){
        this.email = email;
        this.password = password;
    }
}