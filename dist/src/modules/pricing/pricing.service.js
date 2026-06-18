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
exports.PricingService = void 0;
const common_1 = require("@nestjs/common");
const pricing_repository_1 = require("./repositories/pricing.repository");
let PricingService = class PricingService {
    pricingRepository;
    constructor(pricingRepository) {
        this.pricingRepository = pricingRepository;
    }
    async create(createPricingDto) {
        return this.pricingRepository.create(createPricingDto);
    }
    async findAll(skip = 0, take = 10) {
        return this.pricingRepository.findAll(skip, take);
    }
    async findById(id) {
        const pricing = await this.pricingRepository.findById(id);
        if (!pricing) {
            throw new common_1.NotFoundException(`Pricing with id ${id} not found`);
        }
        return pricing;
    }
    async findActive(skip = 0, take = 10) {
        return this.pricingRepository.findActive(skip, take);
    }
    async update(id, updatePricingDto) {
        const pricing = await this.pricingRepository.findById(id);
        if (!pricing) {
            throw new common_1.NotFoundException(`Pricing with id ${id} not found`);
        }
        return this.pricingRepository.update(id, updatePricingDto);
    }
    async delete(id) {
        const pricing = await this.pricingRepository.findById(id);
        if (!pricing) {
            throw new common_1.NotFoundException(`Pricing with id ${id} not found`);
        }
        return this.pricingRepository.delete(id);
    }
    async countAll() {
        return this.pricingRepository.countAll();
    }
};
exports.PricingService = PricingService;
exports.PricingService = PricingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [pricing_repository_1.PricingRepository])
], PricingService);
//# sourceMappingURL=pricing.service.js.map