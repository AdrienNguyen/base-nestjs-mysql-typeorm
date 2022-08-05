import { TypeOrmExModule } from '@modules/typeorm-ex/typeorm-ex.module';
import { UserGroupController } from '@modules/user-groups/user-group.controller';
import { UserGroupService } from '@modules/user-groups/user-group.service';
import { Module } from '@nestjs/common';
import { PermissionRepository } from '@repositories/permission/permission.repository';
import { UserGroupRepository } from '@repositories/user-group';

@Module({
  imports: [
    TypeOrmExModule.forCustomRepository([
      UserGroupRepository,
      PermissionRepository,
    ]),
  ],
  controllers: [UserGroupController],
  providers: [UserGroupService],
})
export class UserGroupModule {}
