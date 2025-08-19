import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import axios from 'axios';

import { Contact } from '../contacts/models/contact.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PositionResponseDto } from '../types';
@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) { }

  @Cron(CronExpression.EVERY_10_HOURS, { name: 'test-named' })
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

    if (res) {
      const toSave = res.data.map(async (v) => {
        const r = this.contactRepository.create({
          ...v,
          date: new Date().toISOString(),
        });
        await this.contactRepository.save(r);
      });
      await Promise.all(toSave);
    }

  }
}
