import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { IRepository } from '../../../common/repositories/repository.interface';

@Injectable()
export class ContactRepository implements IRepository<any> {
  constructor(private prismaService: PrismaService) {}

  async create(data: any) {
    return this.prismaService.contact.create({ data });
  }

  async findAll(skip: number = 0, take: number = 10) {
    return this.prismaService.contact.findMany({
      skip,
      take,
      orderBy: { submittedAt: 'desc' },
    });
  }

  async findById(id: number) {
    return this.prismaService.contact.findUnique({ where: { id } });
  }

  async update(id: number, data: any) {
    return this.prismaService.contact.update({ where: { id }, data });
  }

  async delete(id: number) {
    await this.prismaService.contact.delete({ where: { id } });
  }

  async countAll() {
    return this.prismaService.contact.count();
  }

  async findUnread() {
    return this.prismaService.contact.findMany({
      where: { isRead: false },
      orderBy: { submittedAt: 'desc' },
    });
  }

  async markAsRead(id: number) {
    return this.prismaService.contact.update({
      where: { id },
      data: { isRead: true },
    });
  }
}