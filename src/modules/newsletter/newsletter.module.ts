import { Module } from '@nestjs/common';
import { NewsletterService } from './newsletter.service';
import { NewsletterController } from './newsletter.controller';
import { SubscriberRepository } from './repositories/subscriber.repository';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [],
  providers: [NewsletterService, SubscriberRepository, PrismaService],
  controllers: [NewsletterController],
  exports: [NewsletterService],
})
export class NewsletterModule {}