import { Injectable, NotFoundException } from '@nestjs/common';
import { CaseStudyRepository } from './repositories/case-study.repository';

@Injectable()
export class CaseStudyService {
  constructor(private caseStudyRepository: CaseStudyRepository) {}

  async create(createCaseStudyDto: any) {
    return this.caseStudyRepository.create(createCaseStudyDto);
  }

  async findAll(skip: number = 0, take: number = 10) {
    return this.caseStudyRepository.findAll(skip, take);
  }

  async findById(id: number) {
    const caseStudy = await this.caseStudyRepository.findById(id);
    if (!caseStudy) {
      throw new NotFoundException(`Case study with id ${id} not found`);
    }
    return caseStudy;
  }

  async findActive(skip: number = 0, take: number = 10) {
    return this.caseStudyRepository.findActive(skip, take);
  }

  async update(id: number, updateCaseStudyDto: any) {
    const caseStudy = await this.caseStudyRepository.findById(id);
    if (!caseStudy) {
      throw new NotFoundException(`Case study with id ${id} not found`);
    }
    return this.caseStudyRepository.update(id, updateCaseStudyDto);
  }

  async delete(id: number) {
    const caseStudy = await this.caseStudyRepository.findById(id);
    if (!caseStudy) {
      throw new NotFoundException(`Case study with id ${id} not found`);
    }
    return this.caseStudyRepository.delete(id);
  }

  async countAll() {
    return this.caseStudyRepository.countAll();
  }
}