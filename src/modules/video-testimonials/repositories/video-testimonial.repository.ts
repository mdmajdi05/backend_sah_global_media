import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class VideoTestimonialRepository {
  constructor(private prisma: PrismaService) {}

  findAll(skip = 0, take = 50) {
    return this.prisma.videoTestimonial.findMany({
      skip,
      take,
      orderBy: { order: 'asc' },
    });
  }

  findActive(skip = 0, take = 20) {
    return this.prisma.videoTestimonial.findMany({
      where: { isActive: true },
      skip,
      take,
      orderBy: { order: 'asc' },
    });
  }

  findById(id: number) {
    return this.prisma.videoTestimonial.findUnique({ where: { id } });
  }

  countAll() {
    return this.prisma.videoTestimonial.count();
  }

  create(data: any) {
    return this.prisma.videoTestimonial.create({ data });
  }

  update(id: number, data: any) {
    return this.prisma.videoTestimonial.update({ where: { id }, data });
  }

  delete(id: number) {
    return this.prisma.videoTestimonial.delete({ where: { id } });
  }
}
