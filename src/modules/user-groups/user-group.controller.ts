import { CreateUserGroupDto } from '@modules/user-groups/dtos';
import { UserGroupService } from '@modules/user-groups/user-group.service';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('user-groups')
@ApiTags('user-groups')
export class UserGroupController {
  constructor(private readonly userGroupService: UserGroupService) {}

  //   @Get()
  //   @HttpCode(HttpStatus.OK)
  //   async getAll(@Query() getAllUsersDto: GetAllUsersDto) {
  //     const users = await this.userGroupService.getAll(getAllUsersDto);
  //     return {
  //       success: true,
  //       content: users,
  //     };
  //   }

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
}
