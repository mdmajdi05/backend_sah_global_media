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
exports.SubServiceRepository = exports.ServiceCategoryRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let ServiceCategoryRepository = class ServiceCategoryRepository {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(data) {
        return this.prismaService.serviceCategory.create({
            data,
            include: { subServices: true },
        });
    }
    async findAll(skip = 0, take = 10) {
        return this.prismaService.serviceCategory.findMany({
            skip,
            take,
            orderBy: { order: 'asc' },
            include: { subServices: { orderBy: { order: 'asc' } } },
        });
    }
    async findById(id) {
        return this.prismaService.serviceCategory.findUnique({
            where: { id },
            include: { subServices: { orderBy: { order: 'asc' } } },
        });
    }
    async update(id, data) {
        return this.prismaService.serviceCategory.update({
            where: { id },
            data,
            include: { subServices: true },
        });
    }
    async delete(id) {
        await this.prismaService.serviceCategory.delete({ where: { id } });
    }
    async findActive(skip = 0, take = 10) {
        return this.prismaService.serviceCategory.findMany({
            where: { isActive: true },
            skip,
            take,
            orderBy: { order: 'asc' },
            include: { subServices: { where: { isActive: true }, orderBy: { order: 'asc' } } },
        });
    }
    async countAll() {
        return this.prismaService.serviceCategory.count();
    }
};
exports.ServiceCategoryRepository = ServiceCategoryRepository;
exports.ServiceCategoryRepository = ServiceCategoryRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ServiceCategoryRepository);
let SubServiceRepository = class SubServiceRepository {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(data) {
        return this.prismaService.subService.create({
            data,
            include: { category: true },
        });
    }
    async findAll(skip = 0, take = 10) {
        return this.prismaService.subService.findMany({
            skip,
            take,
            orderBy: { order: 'asc' },
            include: { category: true },
        });
    }
    async findById(id) {
        return this.prismaService.subService.findUnique({
            where: { id },
            include: { category: true },
        });
    }
    async findByCategoryId(categoryId, skip = 0, take = 10) {
        return this.prismaService.subService.findMany({
            where: { serviceCategoryId: categoryId },
            skip,
            take,
            orderBy: { order: 'asc' },
            include: { category: true },
        });
    }
    async update(id, data) {
        return this.prismaService.subService.update({
            where: { id },
            data,
            include: { category: true },
        });
    }
    async delete(id) {
        await this.prismaService.subService.delete({ where: { id } });
    }
    async findActive(skip = 0, take = 10) {
        return this.prismaService.subService.findMany({
            where: { isActive: true },
            skip,
            take,
            orderBy: { order: 'asc' },
            include: { category: true },
        });
    }
    async countAll() {
        return this.prismaService.subService.count();
    }
};
exports.SubServiceRepository = SubServiceRepository;
exports.SubServiceRepository = SubServiceRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SubServiceRepository);
//# sourceMappingURL=service.repository.js.map