import { Module } from '@nestjs/common';
import { PermissionController } from '@modules/permissions/permission.controller';
import { PermissionService } from '@modules/permissions/permission.service';
import { TypeOrmExModule } from '@modules/typeorm-ex/typeorm-ex.module';
import { PermissionRepository } from '@repositories/permission/permission.repository';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([PermissionRepository])],
  controllers: [PermissionController],
  providers: [PermissionService],
})
export class PermissionModule {}
