import { UserGroupType } from '@entities/user-group';
import { BaseRepositoryInterface } from '@repositories/base.repository.inteface';

export interface UserGroupRepositoryInterface
  extends BaseRepositoryInterface<UserGroupType> {
  getUserGroupById(id: number): Promise<UserGroupType>;
  getPermissionsByUserGroupId(id: number): Promise<string[]>;
}
