import { Module } from '@nestjs/common';
import { ConsoleModule } from 'nestjs-console';
import { ConfigModule } from '@nestjs/config';
import { CrawlerConsole } from './app-console.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ConsoleModule,
    CrawlerConsole
  ],
})
export class AppConsoleModule {}
