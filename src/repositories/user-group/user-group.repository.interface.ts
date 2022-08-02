import { UserGroupType } from '@entities/user-group';
import { BaseRepositoryInterface } from '@repositories/base.repository.inteface';

export interface UserGroupRepositoryInterface
  extends BaseRepositoryInterface<UserGroupType> {}
