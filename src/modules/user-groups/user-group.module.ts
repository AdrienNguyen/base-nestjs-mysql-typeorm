import { TypeOrmExModule } from '@modules/typeorm-ex/typeorm-ex.module';
import { UserGroupController } from '@modules/user-groups/user-group.controller';
import { UserGroupService } from '@modules/user-groups/user-group.service';
import { Module } from '@nestjs/common';
import { UserGroupRepository } from '@repositories/user-group';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([UserGroupRepository])],
  controllers: [UserGroupController],
  providers: [UserGroupService],
})
export class UserGroupModule {}
