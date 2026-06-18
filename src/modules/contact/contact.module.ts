import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { ContactRepository } from './repositories/contact.repository';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [],
  providers: [ContactService, ContactRepository, PrismaService],
  controllers: [ContactController],
  exports: [ContactService],
})
export class ContactModule {}