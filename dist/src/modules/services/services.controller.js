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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceController = void 0;
const common_1 = require("@nestjs/common");
const services_service_1 = require("./services.service");
const service_dto_1 = require("./dtos/service.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
let ServiceController = class ServiceController {
    serviceService;
    constructor(serviceService) {
        this.serviceService = serviceService;
    }
    async findAllCategories() {
        return this.serviceService.findActiveCategories(0, 100);
    }
    async createCategory(createCategoryDto) {
        return this.serviceService.createCategory(createCategoryDto);
    }
    async findAllCategoriesAdmin(skip = 0, take = 10) {
        const categories = await this.serviceService.findAllCategories(+skip, +take);
        const total = await this.serviceService.countCategories();
        return { data: categories, total };
    }
    async findCategoryById(id) {
        return this.serviceService.findCategoryById(id);
    }
    async updateCategory(id, updateCategoryDto) {
        return this.serviceService.updateCategory(id, updateCategoryDto);
    }
    async deleteCategory(id) {
        return this.serviceService.deleteCategory(id);
    }
    async createSubService(createSubServiceDto) {
        return this.serviceService.createSubService(createSubServiceDto);
    }
    async findAllSubServicesAdmin(skip = 0, take = 10) {
        const subServices = await this.serviceService.findAllSubServices(+skip, +take);
        const total = await this.serviceService.countSubServices();
        return { data: subServices, total };
    }
    async findSubServiceById(id) {
        return this.serviceService.findSubServiceById(id);
    }
    async findSubServicesByCategory(categoryId, skip = 0, take = 10) {
        return this.serviceService.findSubServicesByCategoryId(categoryId, +skip, +take);
    }
    async updateSubService(id, updateSubServiceDto) {
        return this.serviceService.updateSubService(id, updateSubServiceDto);
    }
    async deleteSubService(id) {
        return this.serviceService.deleteSubService(id);
    }
};
exports.ServiceController = ServiceController;
__decorate([
    (0, common_1.Get)('services'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ServiceController.prototype, "findAllCategories", null);
__decorate([
    (0, common_1.Post)('admin/services'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [service_dto_1.CreateServiceCategoryDto]),
    __metadata("design:returntype", Promise)
], ServiceController.prototype, "createCategory", null);
__decorate([
    (0, common_1.Get)('admin/services'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Query)('skip')),
    __param(1, (0, common_1.Query)('take')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ServiceController.prototype, "findAllCategoriesAdmin", null);
__decorate([
    (0, common_1.Get)('admin/services/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ServiceController.prototype, "findCategoryById", null);
__decorate([
    (0, common_1.Put)('admin/services/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, service_dto_1.UpdateServiceCategoryDto]),
    __metadata("design:returntype", Promise)
], ServiceController.prototype, "updateCategory", null);
__decorate([
    (0, common_1.Delete)('admin/services/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ServiceController.prototype, "deleteCategory", null);
__decorate([
    (0, common_1.Post)('admin/sub-services'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [service_dto_1.CreateSubServiceDto]),
    __metadata("design:returntype", Promise)
], ServiceController.prototype, "createSubService", null);
__decorate([
    (0, common_1.Get)('admin/sub-services'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Query)('skip')),
    __param(1, (0, common_1.Query)('take')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ServiceController.prototype, "findAllSubServicesAdmin", null);
__decorate([
    (0, common_1.Get)('admin/sub-services/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ServiceController.prototype, "findSubServiceById", null);
__decorate([
    (0, common_1.Get)('admin/services/:categoryId/sub-services'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('categoryId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('skip')),
    __param(2, (0, common_1.Query)('take')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", Promise)
], ServiceController.prototype, "findSubServicesByCategory", null);
__decorate([
    (0, common_1.Put)('admin/sub-services/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, service_dto_1.UpdateSubServiceDto]),
    __metadata("design:returntype", Promise)
], ServiceController.prototype, "updateSubService", null);
__decorate([
    (0, common_1.Delete)('admin/sub-services/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ServiceController.prototype, "deleteSubService", null);
exports.ServiceController = ServiceController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [services_service_1.ServiceService])
], ServiceController);
//# sourceMappingURL=services.controller.js.map