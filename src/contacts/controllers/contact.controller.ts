import { Controller, Get, Query } from '@nestjs/common';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../models/contact.entity';
import { FindOptionsOrder, FindOptionsOrderValue } from 'typeorm';

@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) { }

  @Get()
  index(): Promise<Contact[]> {
    return this.contactsService.findAll();
  }

  // @Query('age') age: number, @Query('breed') breed: string
  @Get('/filter')
  index1(@Query('take') take: number,
    @Query('skip') skip: number,
    @Query('order') order: FindOptionsOrderValue): Promise<Contact[]> {


    return this.contactsService.find({
      take: take ?? 10,
      skip: skip ?? 0,
      order: { id: order ?? 'DESC' }
    });
  }


  // @Post('create')
  // async create(@Body() contactData: Contact): Promise<any> {
  //   return this.contactsService.create(contactData);
  // }

  // @Put(':id/update')
  // async update(@Param('id') id, @Body() contactData: Contact): Promise<any> {
  //   contactData.id = Number(id);
  //   console.log('Update #' + contactData.id);
  //   return this.contactsService.update(contactData);
  // }

  // @Delete(':id/delete')
  // async delete(@Param('id') id): Promise<any> {
  //   return this.contactsService.delete(id);
  // }
}
