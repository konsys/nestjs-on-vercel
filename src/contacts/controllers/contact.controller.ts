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
    @Query('nft_id') nft_id: number,
    @Query('network') network: string,
    @Query('token0') token0: string,
    @Query('token1') token1: string,
    @Query('owner') owner: string,
    @Query('in_range') in_range: '1' | '2',
    @Query('date') date: string,
    @Query('order') order: FindOptionsOrderValue): Promise<Contact[]> {



    const find = {
      take: take ?? 10,
      skip: skip ?? 0,
      order: { id: order ?? 'DESC' },
      where: {
      }
    }

    if (nft_id) {
      find['where']['nft_id'] = nft_id
    }
    if (network) {
      find['where']['network'] = network
    }
    if (token0) {
      find['where']['token0'] = token0
    }

    if (token1) {
      find['where']['token1'] = token1
    }
    if (owner) {
      find['where']['owner'] = owner
    }
    if (owner) {
      find['where']['owner'] = owner
    }
    if (date) {
      find['where']['date'] = date
    }

    if (in_range) {
      find['where']['in_range'] = in_range
    }

    return this.contactsService.find(find);
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
