import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ScheduleModule } from '@nestjs/schedule';
import { ContactsController } from './contacts/controllers/contact.controller';
import { Contact } from './contacts/models/contact.entity';
import { ContactsService } from './contacts/services/contacts.service';


@Module({
  imports: [
    ScheduleModule.forRoot(),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'db4free.net',
    //   username: 'testtest1234567',
    //   password: 'testtest1234567',
    //   database: 'testtest1234567',
    //   port: 3306,
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //   synchronize: true,
    // }),

    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite', // Name of your SQLite database file
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Register your entities here
      synchronize: true, // Auto-create tables (use with caution in production)
    }),
    TypeOrmModule.forFeature([Contact])
  ],
  controllers: [AppController, ContactsController],
  providers: [AppService, ContactsService],
})
export class AppModule { }
