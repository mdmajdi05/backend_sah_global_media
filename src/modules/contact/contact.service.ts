import { Injectable, NotFoundException } from '@nestjs/common';
import { ContactRepository } from './repositories/contact.repository';

@Injectable()
export class ContactService {
  constructor(private contactRepository: ContactRepository) {}

  async create(createContactDto: any) {
    return this.contactRepository.create(createContactDto);
  }

  async findAll(skip: number = 0, take: number = 10) {
    return this.contactRepository.findAll(skip, take);
  }

  async findById(id: number) {
    const contact = await this.contactRepository.findById(id);
    if (!contact) {
      throw new NotFoundException(`Contact with id ${id} not found`);
    }
    return contact;
  }

  async update(id: number, updateContactDto: any) {
    const contact = await this.contactRepository.findById(id);
    if (!contact) {
      throw new NotFoundException(`Contact with id ${id} not found`);
    }
    return this.contactRepository.update(id, updateContactDto);
  }

  async delete(id: number) {
    const contact = await this.contactRepository.findById(id);
    if (!contact) {
      throw new NotFoundException(`Contact with id ${id} not found`);
    }
    return this.contactRepository.delete(id);
  }

  async markAsRead(id: number) {
    const contact = await this.contactRepository.findById(id);
    if (!contact) {
      throw new NotFoundException(`Contact with id ${id} not found`);
    }
    return this.contactRepository.markAsRead(id);
  }

  async findUnread() {
    return this.contactRepository.findUnread();
  }

  async countAll() {
    return this.contactRepository.countAll();
  }
}