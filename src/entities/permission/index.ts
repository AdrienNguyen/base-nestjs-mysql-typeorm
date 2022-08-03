import { Permission } from './permission.entity';
import * as dotenv from 'dotenv';
dotenv.config();

const models = {
  mysql: Permission,
  // add new model here if change database
};
export const PermissionModel = models[process.env.DB_TYPE];

export type PermissionType = Permission;
