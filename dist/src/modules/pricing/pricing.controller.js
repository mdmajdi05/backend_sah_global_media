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
exports.PricingController = void 0;
const common_1 = require("@nestjs/common");
const pricing_service_1 = require("./pricing.service");
const pricing_dto_1 = require("./dtos/pricing.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
let PricingController = class PricingController {
    pricingService;
    constructor(pricingService) {
        this.pricingService = pricingService;
    }
    async findAll(skip = 0, take = 10) {
        const pricing = await this.pricingService.findActive(+skip, +take);
        const total = await this.pricingService.countAll();
        return { data: pricing, total };
    }
    async create(createPricingDto) {
        return this.pricingService.create(createPricingDto);
    }
    async findAllAdmin(skip = 0, take = 10) {
        const pricing = await this.pricingService.findAll(+skip, +take);
        const total = await this.pricingService.countAll();
        return { data: pricing, total };
    }
    async findByIdAdmin(id) {
        return this.pricingService.findById(id);
    }
    async update(id, updatePricingDto) {
        return this.pricingService.update(id, updatePricingDto);
    }
    async delete(id) {
        return this.pricingService.delete(id);
    }
};
exports.PricingController = PricingController;
__decorate([
    (0, common_1.Get)('pricing'),
    __param(0, (0, common_1.Query)('skip')),
    __param(1, (0, common_1.Query)('take')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PricingController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('admin/pricing'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pricing_dto_1.CreatePricingDto]),
    __metadata("design:returntype", Promise)
], PricingController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('admin/pricing'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Query)('skip')),
    __param(1, (0, common_1.Query)('take')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PricingController.prototype, "findAllAdmin", null);
__decorate([
    (0, common_1.Get)('admin/pricing/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PricingController.prototype, "findByIdAdmin", null);
__decorate([
    (0, common_1.Put)('admin/pricing/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, pricing_dto_1.UpdatePricingDto]),
    __metadata("design:returntype", Promise)
], PricingController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('admin/pricing/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PricingController.prototype, "delete", null);
exports.PricingController = PricingController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [pricing_service_1.PricingService])
], PricingController);
//# sourceMappingURL=pricing.controller.js.map