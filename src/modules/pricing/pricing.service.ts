import { Injectable, NotFoundException } from '@nestjs/common';
import { PricingRepository } from './repositories/pricing.repository';

@Injectable()
export class PricingService {
  constructor(private pricingRepository: PricingRepository) {}

  async create(createPricingDto: any) {
    return this.pricingRepository.create(createPricingDto);
  }

  async findAll(skip: number = 0, take: number = 10) {
    return this.pricingRepository.findAll(skip, take);
  }

  async findById(id: number) {
    const pricing = await this.pricingRepository.findById(id);
    if (!pricing) {
      throw new NotFoundException(`Pricing with id ${id} not found`);
    }
    return pricing;
  }

  async findActive(skip: number = 0, take: number = 10) {
    return this.pricingRepository.findActive(skip, take);
  }

  async update(id: number, updatePricingDto: any) {
    const pricing = await this.pricingRepository.findById(id);
    if (!pricing) {
      throw new NotFoundException(`Pricing with id ${id} not found`);
    }
    return this.pricingRepository.update(id, updatePricingDto);
  }

  async delete(id: number) {
    const pricing = await this.pricingRepository.findById(id);
    if (!pricing) {
      throw new NotFoundException(`Pricing with id ${id} not found`);
    }
    return this.pricingRepository.delete(id);
  }

  async countAll() {
    return this.pricingRepository.countAll();
  }
}