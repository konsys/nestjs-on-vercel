import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { Contact } from '../models/contact.entity';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Cron, CronExpression } from '@nestjs/schedule';
import axios from 'axios';
import { PositionResponseDto } from '../../types';

type TSelect = {
  take: number
  skip: number
  order: {

  }
}
@Injectable()
export class ContactsService {
  private readonly logger = new Logger(ContactsService.name);

  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) { }

  async findAll(): Promise<Contact[]> {
    return await this.contactRepository.find();
  }

  async find(options?: FindManyOptions): Promise<Contact[]> {

    return await this.contactRepository.find(
      options
    );
  }

  async create(contact: Contact): Promise<Contact> {
    return await this.contactRepository.save(contact);
  }

  async update(contact: Contact): Promise<UpdateResult> {
    return await this.contactRepository.update(contact.id, contact);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.contactRepository.delete(id);
  }

  @Cron(CronExpression.EVERY_30_SECONDS, { name: 'test-named' })
  async handleCron() {
    this.logger.debug('Called every 10 minutes');

    const res = await axios
      .get<PositionResponseDto>(
        'https://api.revert.finance/v1/positions/uniswapv3/account/0x5fb52b7d3de68053298e561f0ce4662b4bb48f88?active=true',
      )
      .then((response) => response.data)
      .catch((error) => {
        console.log(111, error);
      });

    console.log(1111, res)
    if (res) {
      const toSave = res.data.map(async (v) => {
        const r = this.contactRepository.create({
          ...v,
          id: null,
          date: new Date().toISOString(),
        });
        console.log(r)
        await this.contactRepository.save(r);
      });
      await Promise.all(toSave);
    }

  }
}
