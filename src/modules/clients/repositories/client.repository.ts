import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { IRepository } from '../../../common/repositories/repository.interface';

@Injectable()
export class ClientRepository implements IRepository<any> {
  constructor(private prismaService: PrismaService) {}

  async create(data: any) {
    return this.prismaService.client.create({ data });
  }

  async findAll(skip: number = 0, take: number = 10) {
    return this.prismaService.client.findMany({
      skip,
      take,
      orderBy: { order: 'asc' },
    });
  }

  async findById(id: number) {
    return this.prismaService.client.findUnique({ where: { id } });
  }

  async update(id: number, data: any) {
    return this.prismaService.client.update({ where: { id }, data });
  }

  async delete(id: number) {
    await this.prismaService.client.delete({ where: { id } });
  }

  async findActive(skip: number = 0, take: number = 10) {
    return this.prismaService.client.findMany({
      where: { isActive: true },
      skip,
      take,
      orderBy: { order: 'asc' },
    });
  }

  async countAll() {
    return this.prismaService.client.count();
  }
}