import { Module } from '@nestjs/common';
import { ClientService } from './clients.service';
import { ClientController } from './clients.controller';
import { ClientRepository } from './repositories/client.repository';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [],
  providers: [ClientService, ClientRepository, PrismaService],
  controllers: [ClientController],
  exports: [ClientService],
})
export class ClientModule {}