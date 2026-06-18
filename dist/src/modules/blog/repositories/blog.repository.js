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
exports.BlogRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let BlogRepository = class BlogRepository {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(data) {
        return this.prismaService.blog.create({ data });
    }
    async findAll(skip = 0, take = 10) {
        return this.prismaService.blog.findMany({
            skip,
            take,
            orderBy: { createdAt: 'desc' },
        });
    }
    async findById(id) {
        return this.prismaService.blog.findUnique({ where: { id } });
    }
    async findBySlug(slug) {
        return this.prismaService.blog.findUnique({ where: { slug } });
    }
    async update(id, data) {
        return this.prismaService.blog.update({ where: { id }, data });
    }
    async delete(id) {
        await this.prismaService.blog.delete({ where: { id } });
    }
    async findPublished(skip = 0, take = 10, category) {
        const where = { isPublished: true };
        if (category)
            where.category = category;
        return this.prismaService.blog.findMany({
            where,
            skip,
            take,
            orderBy: { publishedAt: 'desc' },
        });
    }
    async countPublished(category) {
        const where = { isPublished: true };
        if (category)
            where.category = category;
        return this.prismaService.blog.count({ where });
    }
    async findRelated(currentSlug, category, take = 3) {
        return this.prismaService.blog.findMany({
            where: { isPublished: true, category, slug: { not: currentSlug } },
            take,
            orderBy: { publishedAt: 'desc' },
            select: { id: true, title: true, slug: true, featuredImage: true, publishedAt: true, excerpt: true },
        });
    }
    async countAll() {
        return this.prismaService.blog.count();
    }
    async getDistinctCategories() {
        const results = await this.prismaService.blog.findMany({
            where: { isPublished: true, category: { not: null } },
            select: { category: true },
            distinct: ['category'],
            orderBy: { category: 'asc' },
        });
        return results.map(r => r.category).filter(Boolean);
    }
};
exports.BlogRepository = BlogRepository;
exports.BlogRepository = BlogRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BlogRepository);
//# sourceMappingURL=blog.repository.js.map