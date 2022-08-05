import { PermissionModel } from '@entities/permission';
import { UserGroupModel } from '@entities/user-group';
import {
  UserGroupPermissionModel,
  UserGroupPermissionType,
} from '@entities/user-group-permission';
import { AddPermissionsDto } from '@modules/user-group-permissions/dtos';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { PermissionRepositoryInterface } from '@repositories/permission/permission.repository.interface';
import { UserGroupRepositoryInterface } from '@repositories/user-group';
import { UserGroupPermissionRepositoryInterface } from '@repositories/user-group-permission';

@Injectable()
export class UserGroupPermissionService {
  constructor(
    @Inject(UserGroupModel.name)
    private readonly userGroupRepository: UserGroupRepositoryInterface,
    @Inject(PermissionModel.name)
    private readonly permissionRepository: PermissionRepositoryInterface,
    @Inject(UserGroupPermissionModel.name)
    private readonly userGroupPermissionRepository: UserGroupPermissionRepositoryInterface,
  ) {}

  async newOne(
    addPermissionsDto: AddPermissionsDto,
  ): Promise<UserGroupPermissionType> {
    const { permissionId, userGroupId, description } = addPermissionsDto;

    const userGroup = await this.userGroupRepository.getOne({
      id: userGroupId,
    });

    if (!userGroup)
      throw new HttpException(
        'UserGroup does not exist. Please try again',
        HttpStatus.NOT_FOUND,
      );

    const permission = await this.permissionRepository.getOne({
      id: permissionId,
    });

    if (!permission)
      throw new HttpException(
        'Permission does not exist. Please try again',
        HttpStatus.NOT_FOUND,
      );

    let userGroupPermission: UserGroupPermissionType;

    try {
      userGroupPermission = await this.userGroupPermissionRepository.newOne({
        permissionId,
        userGroupId,
        description,
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return userGroupPermission;
  }

  async deleteOne(
    userGroupPermissionId: number,
  ): Promise<UserGroupPermissionType> {
    const userGroupPermission: UserGroupPermissionType =
      await this.userGroupPermissionRepository.getOne({
        id: userGroupPermissionId,
      });

    if (!userGroupPermission)
      throw new HttpException(
        'User group permission does not exist. Please try again',
        HttpStatus.NOT_FOUND,
      );

    let deletedUserGroupPermission: UserGroupPermissionType;

    try {
      deletedUserGroupPermission =
        await this.userGroupPermissionRepository.deleteOne({
          id: userGroupPermissionId,
        });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return deletedUserGroupPermission;
  }
}
