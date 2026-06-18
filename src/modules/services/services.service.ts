import { Injectable, NotFoundException } from '@nestjs/common';
import { ServiceCategoryRepository, SubServiceRepository } from './repositories/service.repository';

@Injectable()
export class ServiceService {
  constructor(
    private serviceCategoryRepository: ServiceCategoryRepository,
    private subServiceRepository: SubServiceRepository,
  ) {}

  // ServiceCategory methods
  async createCategory(createCategoryDto: any) {
    return this.serviceCategoryRepository.create(createCategoryDto);
  }

  async findAllCategories(skip: number = 0, take: number = 10) {
    return this.serviceCategoryRepository.findAll(skip, take);
  }

  async findCategoryById(id: number) {
    const category = await this.serviceCategoryRepository.findById(id);
    if (!category) {
      throw new NotFoundException(`Service category with id ${id} not found`);
    }
    return category;
  }

  async findActiveCategories(skip: number = 0, take: number = 10) {
    return this.serviceCategoryRepository.findActive(skip, take);
  }

  async updateCategory(id: number, updateCategoryDto: any) {
    const category = await this.serviceCategoryRepository.findById(id);
    if (!category) {
      throw new NotFoundException(`Service category with id ${id} not found`);
    }
    return this.serviceCategoryRepository.update(id, updateCategoryDto);
  }

  async deleteCategory(id: number) {
    const category = await this.serviceCategoryRepository.findById(id);
    if (!category) {
      throw new NotFoundException(`Service category with id ${id} not found`);
    }
    return this.serviceCategoryRepository.delete(id);
  }

  async countCategories() {
    return this.serviceCategoryRepository.countAll();
  }

  // SubService methods
  async createSubService(createSubServiceDto: any) {
    return this.subServiceRepository.create(createSubServiceDto);
  }

  async findAllSubServices(skip: number = 0, take: number = 10) {
    return this.subServiceRepository.findAll(skip, take);
  }

  async findSubServiceById(id: number) {
    const subService = await this.subServiceRepository.findById(id);
    if (!subService) {
      throw new NotFoundException(`Sub-service with id ${id} not found`);
    }
    return subService;
  }

  async findSubServicesByCategoryId(categoryId: number, skip: number = 0, take: number = 10) {
    return this.subServiceRepository.findByCategoryId(categoryId, skip, take);
  }

  async findActiveSubServices(skip: number = 0, take: number = 10) {
    return this.subServiceRepository.findActive(skip, take);
  }

  async updateSubService(id: number, updateSubServiceDto: any) {
    const subService = await this.subServiceRepository.findById(id);
    if (!subService) {
      throw new NotFoundException(`Sub-service with id ${id} not found`);
    }
    return this.subServiceRepository.update(id, updateSubServiceDto);
  }

  async deleteSubService(id: number) {
    const subService = await this.subServiceRepository.findById(id);
    if (!subService) {
      throw new NotFoundException(`Sub-service with id ${id} not found`);
    }
    return this.subServiceRepository.delete(id);
  }

  async countSubServices() {
    return this.subServiceRepository.countAll();
  }
}