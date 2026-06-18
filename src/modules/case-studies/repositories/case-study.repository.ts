import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { IRepository } from '../../../common/repositories/repository.interface';

@Injectable()
export class CaseStudyRepository implements IRepository<any> {
  constructor(private prismaService: PrismaService) {}

  async create(data: any) {
    return this.prismaService.caseStudy.create({ data });
  }

  async findAll(skip: number = 0, take: number = 10) {
    return this.prismaService.caseStudy.findMany({
      skip,
      take,
      orderBy: { order: 'asc' },
    });
  }

  async findById(id: number) {
    return this.prismaService.caseStudy.findUnique({ where: { id } });
  }

  async update(id: number, data: any) {
    return this.prismaService.caseStudy.update({ where: { id }, data });
  }

  async delete(id: number) {
    await this.prismaService.caseStudy.delete({ where: { id } });
  }

  async findActive(skip: number = 0, take: number = 10) {
    return this.prismaService.caseStudy.findMany({
      where: { isActive: true },
      skip,
      take,
      orderBy: { order: 'asc' },
    });
  }

  async countAll() {
    return this.prismaService.caseStudy.count();
  }
}