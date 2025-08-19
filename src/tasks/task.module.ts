/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TasksService } from './task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from '../contacts/models/contact.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Contact]),],
    controllers: [],
    providers: [TasksService,],
    exports: []
})
export class TaskModule { }
