import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { BlogRepository } from './repositories/blog.repository';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [],
  providers: [BlogService, BlogRepository, PrismaService],
  controllers: [BlogController],
  exports: [BlogService],
})
export class BlogModule {}