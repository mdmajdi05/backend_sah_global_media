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
exports.CaseStudyRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let CaseStudyRepository = class CaseStudyRepository {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(data) {
        return this.prismaService.caseStudy.create({ data });
    }
    async findAll(skip = 0, take = 10) {
        return this.prismaService.caseStudy.findMany({
            skip,
            take,
            orderBy: { order: 'asc' },
        });
    }
    async findById(id) {
        return this.prismaService.caseStudy.findUnique({ where: { id } });
    }
    async update(id, data) {
        return this.prismaService.caseStudy.update({ where: { id }, data });
    }
    async delete(id) {
        await this.prismaService.caseStudy.delete({ where: { id } });
    }
    async findActive(skip = 0, take = 10) {
        return this.prismaService.caseStudy.findMany({
            where: { isActive: true },
            skip,
            take,
            orderBy: { order: 'asc' },
        });
    }
    async countAll() {
        return this.prismaService.caseStudy.count();
    }
};
exports.CaseStudyRepository = CaseStudyRepository;
exports.CaseStudyRepository = CaseStudyRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CaseStudyRepository);
//# sourceMappingURL=case-study.repository.js.map