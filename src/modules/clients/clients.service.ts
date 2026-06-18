import { Injectable, NotFoundException } from '@nestjs/common';
import { ClientRepository } from './repositories/client.repository';

@Injectable()
export class ClientService {
  constructor(private clientRepository: ClientRepository) {}

  async create(createClientDto: any) {
    return this.clientRepository.create(createClientDto);
  }

  async findAll(skip: number = 0, take: number = 10) {
    return this.clientRepository.findAll(skip, take);
  }

  async findById(id: number) {
    const client = await this.clientRepository.findById(id);
    if (!client) {
      throw new NotFoundException(`Client with id ${id} not found`);
    }
    return client;
  }

  async findActive(skip: number = 0, take: number = 10) {
    return this.clientRepository.findActive(skip, take);
  }

  async update(id: number, updateClientDto: any) {
    const client = await this.clientRepository.findById(id);
    if (!client) {
      throw new NotFoundException(`Client with id ${id} not found`);
    }
    return this.clientRepository.update(id, updateClientDto);
  }

  async delete(id: number) {
    const client = await this.clientRepository.findById(id);
    if (!client) {
      throw new NotFoundException(`Client with id ${id} not found`);
    }
    return this.clientRepository.delete(id);
  }

  async countAll() {
    return this.clientRepository.countAll();
  }
}