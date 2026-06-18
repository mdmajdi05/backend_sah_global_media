import { Module } from '@nestjs/common';
import { ServiceService } from './services.service';
import { ServiceController } from './services.controller';
import { ServiceCategoryRepository, SubServiceRepository } from './repositories/service.repository';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [],
  providers: [
    ServiceService,
    ServiceCategoryRepository,
    SubServiceRepository,
    PrismaService,
  ],
  controllers: [ServiceController],
  exports: [ServiceService],
})
export class ServiceModule {}