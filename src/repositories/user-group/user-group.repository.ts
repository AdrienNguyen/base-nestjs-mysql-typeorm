import { CustomRepository } from '@cores/decorators/custom-repository.decorator';
import { UserGroup } from '@entities/user-group/user-group.entity';
import { BaseRepository } from '@repositories/base.repository';
import { UserGroupRepositoryInterface } from '@repositories/user-group/user-group.repository.interface';
import { Equal } from 'typeorm';

@CustomRepository(UserGroup)
export class UserGroupRepository
  extends BaseRepository<UserGroup>
  implements UserGroupRepositoryInterface
{
  async getUserGroupById(id: number): Promise<UserGroup> {
    const userGroup = await this.model.findOne({
      where: {
        id,
      },
      relations: ['permissions'],
    });

    return userGroup;
  }

  async getPermissionsByUserGroupId(id: number): Promise<string[]> {
    const userGroup = await this.model.findOne({
      where: {
        id: Equal(id),
      },
      relations: ['userGroupPermissions'],
    });

    const permission_keys =
      userGroup?.userGroupPermissions?.map(
        (userGroupPermission) => userGroupPermission?.permission?.key,
      ) || [];

    return permission_keys;
  }
}
