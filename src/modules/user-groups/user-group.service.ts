import { PermissionModel, PermissionType } from '@entities/permission';
import { UserGroupModel, UserGroupType } from '@entities/user-group';
import { CreateUserGroupDto } from '@modules/user-groups/dtos';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { PermissionRepositoryInterface } from '@repositories/permission/permission.repository.interface';
import { UserGroupRepositoryInterface } from '@repositories/user-group';
@Injectable()
export class UserGroupService {
  constructor(
    @Inject(UserGroupModel.name)
    private readonly userGroupRepository: UserGroupRepositoryInterface,
    @Inject(PermissionModel.name)
    private readonly permissionRepository: PermissionRepositoryInterface,
  ) {}

  //   async getAll(getAllUsersDto: GetAllUsersDto) {
  //     const usersData = await this.userGroupRepository.getAll(getAllUsersDto);
  //     return usersData;
  //   }

  async newOne(createUserGroupDto: CreateUserGroupDto): Promise<UserGroupType> {
    let createdUserGroup: UserGroupType;
    try {
      createdUserGroup = await this.userGroupRepository.newOne(
        createUserGroupDto,
      );
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return createdUserGroup;
  }

  async getPermissionByUserGroupId(
    userGroupId: number,
  ): Promise<UserGroupType> {
    let permisionKeys;
    try {
      permisionKeys =
        await this.userGroupRepository.getPermissionsByUserGroupId(userGroupId);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return permisionKeys;
  }
}
