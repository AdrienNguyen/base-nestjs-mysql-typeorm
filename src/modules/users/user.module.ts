import { TypeOrmExModule } from '@modules/typeorm-ex/typeorm-ex.module';
import { Module } from '@nestjs/common';
import { UserRepository } from '@repositories/user';
import { UserController } from '@modules/users/user.controller';
import { UserService } from '@modules/users/user.service';
import { UserGroupModule } from '@modules/user-groups/user-group.module';
import { UserGroupRepository } from '@repositories/user-group';

@Module({
  imports: [
    TypeOrmExModule.forCustomRepository([UserRepository, UserGroupRepository]),
    UserGroupModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
