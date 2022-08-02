import { CreateUserDto, GetAllUsersDto } from '@modules/users/dtos';
import { UserService } from '@modules/users/user.service';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getAll(@Query() getAllUsersDto: GetAllUsersDto) {
    const users = await this.userService.getAll(getAllUsersDto);
    return {
      success: true,
      content: users,
    };
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async newOne(@Body() createUserDto: CreateUserDto) {
    const createdUser = await this.userService.newOne(createUserDto);

    return {
      success: true,
      content: createdUser,
    };
  }
}
