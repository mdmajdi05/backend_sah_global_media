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
exports.SettingRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let SettingRepository = class SettingRepository {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(data) {
        return this.prismaService.websiteSetting.create({ data });
    }
    async findAll(skip = 0, take = 10) {
        return this.prismaService.websiteSetting.findMany({
            skip,
            take,
            orderBy: { key: 'asc' },
        });
    }
    async findByKey(key) {
        return this.prismaService.websiteSetting.findUnique({ where: { key } });
    }
    async update(key, data) {
        return this.prismaService.websiteSetting.update({
            where: { key },
            data,
        });
    }
    async upsert(key, data) {
        return this.prismaService.websiteSetting.upsert({
            where: { key },
            create: { key, ...data },
            update: data,
        });
    }
    async delete(key) {
        await this.prismaService.websiteSetting.delete({ where: { key } });
    }
    async countAll() {
        return this.prismaService.websiteSetting.count();
    }
    async getPublicSettings() {
        const settings = await this.prismaService.websiteSetting.findMany();
        const result = {};
        settings.forEach((setting) => {
            result[setting.key] = setting.value;
        });
        return result;
    }
};
exports.SettingRepository = SettingRepository;
exports.SettingRepository = SettingRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SettingRepository);
//# sourceMappingURL=setting.repository.js.map