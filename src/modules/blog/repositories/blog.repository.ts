import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { IRepository } from '../../../common/repositories/repository.interface';

@Injectable()
export class BlogRepository implements IRepository<any> {
  constructor(private prismaService: PrismaService) {}

  async create(data: any) {
    return this.prismaService.blog.create({ data });
  }

  async findAll(skip: number = 0, take: number = 10) {
    return this.prismaService.blog.findMany({
      skip,
      take,
      orderBy: { createdAt: 'desc' },
    });
  }

  async findById(id: number) {
    return this.prismaService.blog.findUnique({ where: { id } });
  }

  async findBySlug(slug: string) {
    return this.prismaService.blog.findUnique({ where: { slug } });
  }

  async update(id: number, data: any) {
    return this.prismaService.blog.update({ where: { id }, data });
  }

  async delete(id: number) {
    await this.prismaService.blog.delete({ where: { id } });
  }

  async findPublished(skip: number = 0, take: number = 10, category?: string) {
    const where: any = { isPublished: true };
    if (category) where.category = category;
    return this.prismaService.blog.findMany({
      where,
      skip,
      take,
      orderBy: { publishedAt: 'desc' },
    });
  }

  async countPublished(category?: string) {
    const where: any = { isPublished: true };
    if (category) where.category = category;
    return this.prismaService.blog.count({ where });
  }

  async findRelated(currentSlug: string, category: string, take = 3) {
    return this.prismaService.blog.findMany({
      where: { isPublished: true, category, slug: { not: currentSlug } },
      take,
      orderBy: { publishedAt: 'desc' },
      select: { id: true, title: true, slug: true, featuredImage: true, publishedAt: true, excerpt: true },
    });
  }

  async countAll() {
    return this.prismaService.blog.count();
  }

  async getDistinctCategories(): Promise<string[]> {
    const results = await this.prismaService.blog.findMany({
      where: { isPublished: true, category: { not: null } },
      select: { category: true },
      distinct: ['category'],
      orderBy: { category: 'asc' },
    });
    return results.map(r => r.category as string).filter(Boolean);
  }
}