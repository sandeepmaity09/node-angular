
// import * as ORM from "sequelize";
// import { Sequelize, LoggingOptions } from "sequelize";

// // const dbUrl: string = "postgres://postgres:mani@localhost:5432/complete-typescript-course";
// const dbUrl: string = "mysql://root:root@localhost:3306/mysql";



// const options: LoggingOptions = { benchmark: true, logging: console.log };


// export const sequelize: Sequelize = new ORM(dbUrl, options);

// sequelize.authenticate().then(() => {
//     console.log('Connection has been established successfully.');
// }).catch(err => {
//     console.error('Unable to connect to the database:', err);
// });


// import * as mongoose from 'mongoose';

// const dbUrl: string = "mongodb://backenduser:backenduser@localhost:27017/complete-typescript-course";

module.exports = {
	'dbUrl':'mongodb://backenduser:backenduser@localhost:27017/complete-typescript-course'
}