import { AuthController } from '@modules/auths/auth.controller';
import { AuthService } from '@modules/auths/auth.service';
import { TypeOrmExModule } from '@modules/typeorm-ex/typeorm-ex.module';
import { UserModule } from '@modules/users/user.module';
import { Module } from '@nestjs/common';
import { UserRepository } from '@repositories/user';

@Module({
  imports: [UserModule, TypeOrmExModule.forCustomRepository([UserRepository])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
