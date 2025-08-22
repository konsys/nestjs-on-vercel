import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { Contact } from '../models/contact.entity';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Cron, CronExpression } from '@nestjs/schedule';
import axios from 'axios';
import { PositionResponseDto } from '../../types';

import { createClient } from 'graphql-http';

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

  @Cron(CronExpression.EVERY_10_MINUTES, { name: 'test-named' })
  async handleCron() {
    this.logger.fatal('Called every 10 minutes');


    const client = createClient({
      url: 'https://gateway-arbitrum.network.thegraph.com/api/2215756a9c5d0a9e90f0c0fcbee6730d/subgraphs/id/5zvR82QoaXYFyDEKLZ9t6v9adgnptxYpKpSbxtgVENFV',
    });

    let cancel = () => {
      /* abort the request if it is in-flight */
    };

    const result: any = await new Promise((resolve, reject) => {
      let result;
      cancel = client.subscribe(
        {
          query: "{tokenDayDatas(orderBy: date,\n orderDirection: desc,\n first: 1,\n \n where: {token:\"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2\"})  {\n id\n date,\n token {id, name, symbol, decimals},\n priceUSD\n }}"
        },
        {
          next: (data) => {
            result = data
          },
          error: reject,
          complete: () => resolve(result),
        },
      );
    });

    const price = result?.data?.tokenDayDatas?.length ? result?.data?.tokenDayDatas[0].priceUSD : 0


    const res = await axios
      .get<PositionResponseDto>(
        'https://api.revert.finance/v1/positions/uniswapv3/account/0x5fb52b7d3de68053298e561f0ce4662b4bb48f88?active=true',
      )
      .then((response) => response.data)
      .catch((error) => {
        console.log("error", error);
      });


    if (res) {
      const toSave = res.data.map(async (v) => {
        const r = this.contactRepository.create({
          ...v,
          id: null,
          date: new Date().toISOString(),
          priceWETH: price.toString()
        });
        await this.contactRepository.save(r);
      });
      await Promise.all(toSave);
    }

  }
}
