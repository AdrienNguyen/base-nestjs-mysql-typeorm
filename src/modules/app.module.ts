import { DatabaseModule } from '@database/database.module';
import { AppController } from '@modules/app.controller';
import { AppService } from '@modules/app.service';
import { AuthModule } from '@modules/auths/auth.module';
import { UserModule } from '@modules/users/user.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserGroupModule } from '@modules/user-groups/user-group.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    UserModule,
    AuthModule,
    UserGroupModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
