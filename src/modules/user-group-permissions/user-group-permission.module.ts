import { TypeOrmExModule } from '@modules/typeorm-ex/typeorm-ex.module';
import { UserGroupPermissionController } from '@modules/user-group-permissions/user-group-permission.controller';
import { UserGroupPermissionService } from '@modules/user-group-permissions/user-group-permission.service';
import { Module } from '@nestjs/common';
import { PermissionRepository } from '@repositories/permission/permission.repository';
import { UserGroupRepository } from '@repositories/user-group';
import { UserGroupPermissionRepository } from '@repositories/user-group-permission';

@Module({
  imports: [
    TypeOrmExModule.forCustomRepository([
      UserGroupRepository,
      PermissionRepository,
      UserGroupPermissionRepository,
    ]),
  ],
  controllers: [UserGroupPermissionController],
  providers: [UserGroupPermissionService],
})
export class UserGroupPermissionModule {}
