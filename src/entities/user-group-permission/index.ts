import { UserGroupPermission } from './user-group-permission.entity';
import * as dotenv from 'dotenv';
dotenv.config();

const models = {
  mysql: UserGroupPermission,
  // add new model here if change database
};
export const UserGroupPermissionModel = models[process.env.DB_TYPE];

export type UserGroupPermissionType = UserGroupPermission;
