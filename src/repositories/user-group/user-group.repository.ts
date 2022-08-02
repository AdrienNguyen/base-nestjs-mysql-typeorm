import { CustomRepository } from '@cores/decorators/custom-repository.decorator';
import { UserGroup } from '@entities/user-group/user-group.entity';
import { BaseRepository } from '@repositories/base.repository';
import { UserGroupRepositoryInterface } from '@repositories/user-group/user-group.repository.interface';

@CustomRepository(UserGroup)
export class UserGroupRepository
  extends BaseRepository<UserGroup>
  implements UserGroupRepositoryInterface {}
