
import { sequelize } from "../db";
import * as ORM from "sequelize";
import * as bcrypt from "bcrypt-nodejs";

export const Users = sequelize.define('users',{
	email: ORM.STRING,
	password: ORM.STRING
});

