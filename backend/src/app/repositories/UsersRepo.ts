import { Users } from '../../db/schemas/Users';

class UsersRepo {
    constructor() {}

    login(){
        return Users.findAll();
    }

    signup(props:any){
    	// console.log(props);
    	// let obj = Users.build(props);
        // return obj.save();
        // Users.create(props).then((result)=>{
        //     let prom = new Promise(result);
        // }).catch((err)=>{
        //     console.log('this is error in userrepo',err);
        // })
        let obj = Users.create(props);
        // console.log(obj);
        return obj;
    }
}

export default new UsersRepo();