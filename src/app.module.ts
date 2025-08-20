import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactsModule } from './contacts/contacts.module';
import { ScheduleModule } from '@nestjs/schedule';

const path = require('path');

const dbPath = path.join(__dirname, '../../', 'db.sqlite');

console.log(dbPath)
@Module({
  imports: [ContactsModule,
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db4free.net',
      username: 'testtest1234567',
      password: 'testtest1234567',
      database: 'testtest1234567',
      port: 3306,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
