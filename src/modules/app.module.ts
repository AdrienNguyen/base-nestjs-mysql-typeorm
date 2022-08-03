import { DatabaseModule } from '@database/database.module';
import { AppController } from '@modules/app.controller';
import { AppService } from '@modules/app.service';
import { AuthModule } from '@modules/auths/auth.module';
import { PermissionModule } from '@modules/permissions/permission.module';
import { UserGroupModule } from '@modules/user-groups/user-group.module';
import { UserModule } from '@modules/users/user.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    UserModule,
    AuthModule,
    UserGroupModule,
    PermissionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
