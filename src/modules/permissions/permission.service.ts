import { PermissionModel, PermissionType } from '@entities/permission';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { PermissionRepositoryInterface } from '@repositories/permission/permission.repository.interface';
import { CreatePermissionDto } from './dtos';

@Injectable()
export class PermissionService {
  constructor(
    @Inject(PermissionModel.name)
    private readonly permissionRepository: PermissionRepositoryInterface,
  ) {}

  async newOne(createPermissionDto: CreatePermissionDto) {
    let createdPermission: PermissionType;
    try {
      createdPermission = await this.permissionRepository.newOne(
        createPermissionDto,
      );
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return createdPermission;
  }
}
