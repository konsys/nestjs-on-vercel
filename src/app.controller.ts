import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ContactsService } from './contacts/services/contacts.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly contactService: ContactsService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

}
