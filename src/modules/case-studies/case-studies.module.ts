import { Module } from '@nestjs/common';
import { CaseStudyService } from './case-studies.service';
import { CaseStudyController } from './case-studies.controller';
import { CaseStudyRepository } from './repositories/case-study.repository';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [],
  providers: [CaseStudyService, CaseStudyRepository, PrismaService],
  controllers: [CaseStudyController],
  exports: [CaseStudyService],
})
export class CaseStudyModule {}