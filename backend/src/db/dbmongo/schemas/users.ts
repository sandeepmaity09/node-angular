import {Schema, Model, Document, model} from 'mongoose';
import { IUserModel } from '../../../app/models/core/userModel';
import { UserRequest } from '../../../app/models/request/userRequest';

// import * as bcrypt from 'bcryptjs';

// interface IUser extends UserRequest, Document {
//     email: string;
// }

// interface IUserModel {
//     createUser(user: IUser, callback: any): void
//     comparePassword(candidatePassword: string, hash: string, callback: any): void
//     findByEmail(email: string, callback: any): void
// }

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        "default": Date.now()
    },
    updatedAt: {
        type: Date,
        "default": Date.now()
    }
});

export const User: UserRequest = model<UserRequest>("User", userSchema);

// export const Users: 
// userSchema.static('createUser', (user: IUser, callback: any) => {
//     bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(user.password, salt, (err, hash) => {
//             if(err) throw err;
//             user.password = hash;
//             user.save(callback);
//         });
//     });
// });

// userSchema.static('comparePassword', (candidatePassword: string, hash: string, callback: any) => {
//     bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
//         if(err) throw err;
//         callback(null, isMatch);
//     });
// });

// userSchema.static('findByEmail', (email: string, callback: any) => {
//     User.findOne({email: email}, callback);
// });

// export type UserModel = Model<IUser> & IUser;
