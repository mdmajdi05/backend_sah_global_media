import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { IRepository } from '../../../common/repositories/repository.interface';

@Injectable()
export class SubscriberRepository implements IRepository<any> {
  constructor(private prismaService: PrismaService) {}

  async create(data: any) {
    return this.prismaService.subscriber.create({ data });
  }

  async findAll(skip: number = 0, take: number = 10) {
    return this.prismaService.subscriber.findMany({
      skip,
      take,
      orderBy: { subscribedAt: 'desc' },
    });
  }

  async findById(id: number) {
    return this.prismaService.subscriber.findUnique({ where: { id } });
  }

  async update(id: number, data: any) {
    return this.prismaService.subscriber.update({ where: { id }, data });
  }

  async delete(id: number) {
    await this.prismaService.subscriber.delete({ where: { id } });
  }

  async findByEmail(email: string) {
    return this.prismaService.subscriber.findUnique({ where: { email } });
  }

  async countAll() {
    return this.prismaService.subscriber.count();
  }
}