import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ContactsController } from './contacts/controllers/contact.controller';
import { Contact } from './contacts/models/contact.entity';
import { ContactsService } from './contacts/services/contacts.service';


const path = require('path');

const dbPath = path.join(__dirname, '../../', 'db.sqlite');

console.log(dbPath)
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db4free.net',
      username: 'testtest1234567',
      password: 'testtest1234567',
      database: 'testtest1234567',
      port: 3306,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Contact])
  ],
  controllers: [AppController, ContactsController],
  providers: [AppService, ContactsService],
})
export class AppModule { }
