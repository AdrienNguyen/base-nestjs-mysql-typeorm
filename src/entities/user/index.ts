import { User } from './user.entity';
import * as dotenv from 'dotenv';
dotenv.config();

const models = {
  mysql: User,
  // add new model here if change database
};
export const UserModel = models[process.env.DB_TYPE];
