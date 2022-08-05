import { UserGroupPermissionType } from '@entities/user-group-permission';
import { BaseRepositoryInterface } from '@repositories/base.repository.inteface';

export interface UserGroupPermissionRepositoryInterface
  extends BaseRepositoryInterface<UserGroupPermissionType> {}
