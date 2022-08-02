import { UserGroup } from './user-group.entity';
import * as dotenv from 'dotenv';
dotenv.config();

const models = {
  mysql: UserGroup,
  // add new model here if change database
};
export const UserGroupModel = models[process.env.DB_TYPE];

export type UserGroupType = UserGroup;
