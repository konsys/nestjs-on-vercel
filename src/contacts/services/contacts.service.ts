import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { Contact } from '../models/contact.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

type TSelect = {
  take: number
  skip: number
  o
}
@Injectable()
export class ContactsService {
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
}
