import { Module } from '@nestjs/common';
import { PricingService } from './pricing.service';
import { PricingController } from './pricing.controller';
import { PricingRepository } from './repositories/pricing.repository';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [],
  providers: [PricingService, PricingRepository, PrismaService],
  controllers: [PricingController],
  exports: [PricingService],
})
export class PricingModule {}