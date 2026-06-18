import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { IRepository } from '../../../common/repositories/repository.interface';

@Injectable()
export class ServiceCategoryRepository implements IRepository<any> {
  constructor(private prismaService: PrismaService) {}

  async create(data: any) {
    return this.prismaService.serviceCategory.create({
      data,
      include: { subServices: true },
    });
  }

  async findAll(skip: number = 0, take: number = 10) {
    return this.prismaService.serviceCategory.findMany({
      skip,
      take,
      orderBy: { order: 'asc' },
      include: { subServices: { orderBy: { order: 'asc' } } },
    });
  }

  async findById(id: number) {
    return this.prismaService.serviceCategory.findUnique({
      where: { id },
      include: { subServices: { orderBy: { order: 'asc' } } },
    });
  }

  async update(id: number, data: any) {
    return this.prismaService.serviceCategory.update({
      where: { id },
      data,
      include: { subServices: true },
    });
  }

  async delete(id: number) {
    await this.prismaService.serviceCategory.delete({ where: { id } });
  }

  async findActive(skip: number = 0, take: number = 10) {
    return this.prismaService.serviceCategory.findMany({
      where: { isActive: true },
      skip,
      take,
      orderBy: { order: 'asc' },
      include: { subServices: { where: { isActive: true }, orderBy: { order: 'asc' } } },
    });
  }

  async countAll() {
    return this.prismaService.serviceCategory.count();
  }
}

@Injectable()
export class SubServiceRepository implements IRepository<any> {
  constructor(private prismaService: PrismaService) {}

  async create(data: any) {
    return this.prismaService.subService.create({
      data,
      include: { category: true },
    });
  }

  async findAll(skip: number = 0, take: number = 10) {
    return this.prismaService.subService.findMany({
      skip,
      take,
      orderBy: { order: 'asc' },
      include: { category: true },
    });
  }

  async findById(id: number) {
    return this.prismaService.subService.findUnique({
      where: { id },
      include: { category: true },
    });
  }

  async findByCategoryId(categoryId: number, skip: number = 0, take: number = 10) {
    return this.prismaService.subService.findMany({
      where: { serviceCategoryId: categoryId },
      skip,
      take,
      orderBy: { order: 'asc' },
      include: { category: true },
    });
  }

  async update(id: number, data: any) {
    return this.prismaService.subService.update({
      where: { id },
      data,
      include: { category: true },
    });
  }

  async delete(id: number) {
    await this.prismaService.subService.delete({ where: { id } });
  }

  async findActive(skip: number = 0, take: number = 10) {
    return this.prismaService.subService.findMany({
      where: { isActive: true },
      skip,
      take,
      orderBy: { order: 'asc' },
      include: { category: true },
    });
  }

  async countAll() {
    return this.prismaService.subService.count();
  }
}