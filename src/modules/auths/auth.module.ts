import { AuthController } from '@modules/auths/auth.controller';
import { AuthService } from '@modules/auths/auth.service';
import { TypeOrmExModule } from '@modules/typeorm-ex/typeorm-ex.module';
import { UserModule } from '@modules/users/user.module';
import { Module } from '@nestjs/common';
import { UserRepository } from '@repositories/user';
import { UserGroupRepository } from '@repositories/user-group';

@Module({
  imports: [
    UserModule,
    TypeOrmExModule.forCustomRepository([UserRepository, UserGroupRepository]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
