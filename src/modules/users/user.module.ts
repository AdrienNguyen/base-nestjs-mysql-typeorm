import { TypeOrmExModule } from '@modules/typeorm-ex/typeorm-ex.module';
import { Module } from '@nestjs/common';
import { UserRepository } from '@repositories/user';
import { UserController } from '@modules/users/user.controller';
import { UserService } from '@modules/users/user.service';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([UserRepository])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
