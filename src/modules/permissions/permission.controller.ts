import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePermissionDto } from '@modules/permissions/dtos';
import { PermissionService } from '@modules/permissions/permission.service';

@Controller('permissions')
@ApiTags('permissions')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async newOne(@Body() createPermissionDto: CreatePermissionDto) {
    const createdPermission = await this.permissionService.newOne(
      createPermissionDto,
    );

    return {
      success: true,
      content: createdPermission,
    };
  }
}
