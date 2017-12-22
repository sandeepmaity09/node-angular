// import { Course } from '../models/Course';
// import { Lesson } from '../models/Lesson';

import { Users } from '../models/Users';

// class LessonRepo {

//     constructor() {    }

//     getAllLessons(options) {
//         return Lesson.findAll(options);
//     }

//     getLessonById(id) {
//         return Lesson.findById(id);
//     }

//     getLessonByCourse(id) {
//         return Lesson.findAll({ where: { 'courseId': id } });
//     }

//     createLesson(props: any) {
//         return Lesson.create(props);
//     }

//     updateLesson(id: Number, props: any) {
//         return Lesson.update(props, { where: { id } });
//     }

//     deleteLesson(id: Number) {
//         return Lesson.destroy({ where: { id } });
//     }
// }

// export default new LessonRepo();

class UsersRepo {
    constructor() {}

    login(){
        return Users.findAll();
    }

    signup(props:any){
    	console.log(props);
    	// var obj = Users.build(props);
        // return obj.save();
        return Users.create(props);
    }
}

export default new UsersRepo();