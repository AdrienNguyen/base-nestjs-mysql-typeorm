import { CustomRepository } from '@cores/decorators/custom-repository.decorator';
import { Permission } from '@entities/permission/permission.entity';
import { BaseRepository } from '@repositories/base.repository';
import { PermissionRepositoryInterface } from '@repositories/permission/permission.repository.interface';

@CustomRepository(Permission)
export class PermissionRepository
  extends BaseRepository<Permission>
  implements PermissionRepositoryInterface {}
