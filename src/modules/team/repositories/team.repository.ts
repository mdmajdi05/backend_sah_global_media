import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { IRepository } from '../../../common/repositories/repository.interface';

@Injectable()
export class TeamRepository implements IRepository<any> {
  constructor(private prismaService: PrismaService) {}

  async create(data: any) {
    return this.prismaService.team.create({ data });
  }

  async findAll(skip: number = 0, take: number = 10) {
    return this.prismaService.team.findMany({
      skip,
      take,
      orderBy: { order: 'asc' },
    });
  }

  async findById(id: number) {
    return this.prismaService.team.findUnique({ where: { id } });
  }

  async update(id: number, data: any) {
    return this.prismaService.team.update({ where: { id }, data });
  }

  async delete(id: number) {
    await this.prismaService.team.delete({ where: { id } });
  }

  async findActive(skip: number = 0, take: number = 10) {
    return this.prismaService.team.findMany({
      where: { isActive: true },
      skip,
      take,
      orderBy: { order: 'asc' },
    });
  }

  async countAll() {
    return this.prismaService.team.count();
  }
}