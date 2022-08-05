import { UserGroupPermissionService } from '@modules/user-group-permissions/user-group-permission.service';
import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AddPermissionsDto } from '@modules/user-group-permissions/dtos/change-permissions.dto';

@Controller('user-group-permissions')
@ApiTags('user-group-permissions')
export class UserGroupPermissionController {
  constructor(
    private readonly userGroupPermissionService: UserGroupPermissionService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async newOne(@Body() addPermissionsDto: AddPermissionsDto) {
    const createdUserGroupPermission =
      await this.userGroupPermissionService.newOne(addPermissionsDto);
    return {
      success: true,
      content: createdUserGroupPermission,
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async deleteOne(@Param('id') userGroupPermissionId: number) {
    const deletedUserGroupPermission =
      await this.userGroupPermissionService.deleteOne(userGroupPermissionId);
    return {
      success: true,
      content: deletedUserGroupPermission,
    };
  }
}
