import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { TeamRepository } from './repositories/team.repository';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [],
  providers: [TeamService, TeamRepository, PrismaService],
  controllers: [TeamController],
  exports: [TeamService],
})
export class TeamModule {}