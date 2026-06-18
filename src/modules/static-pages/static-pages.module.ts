import { Module } from '@nestjs/common';
import { StaticPagesService } from './static-pages.service';
import { StaticPagesController } from './static-pages.controller';
import { StaticPageRepository } from './repositories/static-page.repository';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  providers: [StaticPagesService, StaticPageRepository, PrismaService],
  controllers: [StaticPagesController],
})
export class StaticPagesModule {}
