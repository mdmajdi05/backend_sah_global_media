import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { IRepository } from '../../../common/repositories/repository.interface';

@Injectable()
export class UserRepository implements IRepository<any> {
  constructor(private prismaService: PrismaService) {}

  async create(data: any) {
    return this.prismaService.adminUser.create({ data });
  }

  async findAll(skip: number = 0, take: number = 10) {
    return this.prismaService.adminUser.findMany({
      skip,
      take,
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
      },
    });
  }

  async findById(id: number) {
    return this.prismaService.adminUser.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
      },
    });
  }

  async findByEmail(email: string) {
    return this.prismaService.adminUser.findUnique({ where: { email } });
  }

  async update(id: number, data: any) {
    return this.prismaService.adminUser.update({
      where: { id },
      data,
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
      },
    });
  }

  async delete(id: number) {
    await this.prismaService.adminUser.delete({ where: { id } });
  }

  async countAll() {
    return this.prismaService.adminUser.count();
  }
}