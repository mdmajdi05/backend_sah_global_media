"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceService = void 0;
const common_1 = require("@nestjs/common");
const service_repository_1 = require("./repositories/service.repository");
let ServiceService = class ServiceService {
    serviceCategoryRepository;
    subServiceRepository;
    constructor(serviceCategoryRepository, subServiceRepository) {
        this.serviceCategoryRepository = serviceCategoryRepository;
        this.subServiceRepository = subServiceRepository;
    }
    async createCategory(createCategoryDto) {
        return this.serviceCategoryRepository.create(createCategoryDto);
    }
    async findAllCategories(skip = 0, take = 10) {
        return this.serviceCategoryRepository.findAll(skip, take);
    }
    async findCategoryById(id) {
        const category = await this.serviceCategoryRepository.findById(id);
        if (!category) {
            throw new common_1.NotFoundException(`Service category with id ${id} not found`);
        }
        return category;
    }
    async findActiveCategories(skip = 0, take = 10) {
        return this.serviceCategoryRepository.findActive(skip, take);
    }
    async updateCategory(id, updateCategoryDto) {
        const category = await this.serviceCategoryRepository.findById(id);
        if (!category) {
            throw new common_1.NotFoundException(`Service category with id ${id} not found`);
        }
        return this.serviceCategoryRepository.update(id, updateCategoryDto);
    }
    async deleteCategory(id) {
        const category = await this.serviceCategoryRepository.findById(id);
        if (!category) {
            throw new common_1.NotFoundException(`Service category with id ${id} not found`);
        }
        return this.serviceCategoryRepository.delete(id);
    }
    async countCategories() {
        return this.serviceCategoryRepository.countAll();
    }
    async createSubService(createSubServiceDto) {
        return this.subServiceRepository.create(createSubServiceDto);
    }
    async findAllSubServices(skip = 0, take = 10) {
        return this.subServiceRepository.findAll(skip, take);
    }
    async findSubServiceById(id) {
        const subService = await this.subServiceRepository.findById(id);
        if (!subService) {
            throw new common_1.NotFoundException(`Sub-service with id ${id} not found`);
        }
        return subService;
    }
    async findSubServicesByCategoryId(categoryId, skip = 0, take = 10) {
        return this.subServiceRepository.findByCategoryId(categoryId, skip, take);
    }
    async findActiveSubServices(skip = 0, take = 10) {
        return this.subServiceRepository.findActive(skip, take);
    }
    async updateSubService(id, updateSubServiceDto) {
        const subService = await this.subServiceRepository.findById(id);
        if (!subService) {
            throw new common_1.NotFoundException(`Sub-service with id ${id} not found`);
        }
        return this.subServiceRepository.update(id, updateSubServiceDto);
    }
    async deleteSubService(id) {
        const subService = await this.subServiceRepository.findById(id);
        if (!subService) {
            throw new common_1.NotFoundException(`Sub-service with id ${id} not found`);
        }
        return this.subServiceRepository.delete(id);
    }
    async countSubServices() {
        return this.subServiceRepository.countAll();
    }
};
exports.ServiceService = ServiceService;
exports.ServiceService = ServiceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [service_repository_1.ServiceCategoryRepository,
        service_repository_1.SubServiceRepository])
], ServiceService);
//# sourceMappingURL=services.service.js.map