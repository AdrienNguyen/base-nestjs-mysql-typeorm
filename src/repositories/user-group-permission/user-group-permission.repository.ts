import { CustomRepository } from '@cores/decorators/custom-repository.decorator';
import { UserGroupPermissionType } from '@entities/user-group-permission';
import { UserGroupPermission } from '@entities/user-group-permission/user-group-permission.entity';
import { BaseRepository } from '@repositories/base.repository';
import { UserGroupPermissionRepositoryInterface } from './user-group-permission.repository.interface';

@CustomRepository(UserGroupPermission)
export class UserGroupPermissionRepository
  extends BaseRepository<UserGroupPermissionType>
  implements UserGroupPermissionRepositoryInterface {}
