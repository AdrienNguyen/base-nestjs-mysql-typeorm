import { Module } from '@nestjs/common';
import { DatabaseSQLModule } from '@database/database.sql.module';

@Module({
  imports: [DatabaseSQLModule],
})
export class DatabaseModule {}
