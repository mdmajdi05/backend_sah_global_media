import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class StaticPageRepository {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.staticPage.findMany({ orderBy: { slug: 'asc' } });
  }

  findBySlug(slug: string) {
    return this.prisma.staticPage.findUnique({ where: { slug } });
  }

  upsert(slug: string, data: { title?: string; content?: string }) {
    return this.prisma.staticPage.upsert({
      where: { slug },
      update: { ...data, updatedAt: new Date() },
      create: {
        slug,
        title: data.title ?? slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
        content: data.content ?? '',
      },
    });
  }
}
