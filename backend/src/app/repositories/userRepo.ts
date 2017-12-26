import { Users } from '../../db/dbmysql/schemas/Users';

class UsersRepo {
    constructor() {}

    login(){
        return Users.findAll();
    }

    signup(props:any){
        let obj = Users.create(props);
        return obj;
    }
}

export default new UsersRepo();