import { CreateUserGroupDto } from '@modules/user-groups/dtos';
import { UserGroupService } from '@modules/user-groups/user-group.service';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('user-groups')
@ApiTags('user-groups')
export class UserGroupController {
  constructor(private readonly userGroupService: UserGroupService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async newOne(@Body() createUserGroupDto: CreateUserGroupDto) {
    const createdUserGroup = await this.userGroupService.newOne(
      createUserGroupDto,
    );

    return {
      success: true,
      content: createdUserGroup,
    };
  }

  @Get('get-permissions/:id')
  @HttpCode(HttpStatus.OK)
  async getPgetPermissionByUserGroupIdermissions(
    @Body('id') userGroupId: number,
  ) {
    const userGroup = await this.userGroupService.getPermissionByUserGroupId(
      userGroupId,
    );

    return {
      success: true,
      content: userGroup,
    };
  }
}
