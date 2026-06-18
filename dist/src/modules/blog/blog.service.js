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
exports.BlogService = void 0;
const common_1 = require("@nestjs/common");
const blog_repository_1 = require("./repositories/blog.repository");
let BlogService = class BlogService {
    blogRepository;
    constructor(blogRepository) {
        this.blogRepository = blogRepository;
    }
    async create(createBlogDto) {
        return this.blogRepository.create(createBlogDto);
    }
    async findAll(skip = 0, take = 10) {
        return this.blogRepository.findAll(skip, take);
    }
    async findById(id) {
        const blog = await this.blogRepository.findById(id);
        if (!blog)
            throw new common_1.NotFoundException(`Blog #${id} not found`);
        return blog;
    }
    async findBySlug(slug) {
        const blog = await this.blogRepository.findBySlug(slug);
        if (!blog)
            throw new common_1.NotFoundException(`Blog '${slug}' not found`);
        return blog;
    }
    async findPublished(skip = 0, take = 10, category) {
        return this.blogRepository.findPublished(skip, take, category);
    }
    async findRelated(currentSlug, category, take = 3) {
        return this.blogRepository.findRelated(currentSlug, category, take);
    }
    async getDistinctCategories() {
        return this.blogRepository.getDistinctCategories();
    }
    async update(id, updateBlogDto) {
        await this.findById(id);
        return this.blogRepository.update(id, updateBlogDto);
    }
    async delete(id) {
        await this.findById(id);
        return this.blogRepository.delete(id);
    }
    async countAll() {
        return this.blogRepository.countAll();
    }
    async countPublished(category) {
        return this.blogRepository.countPublished(category);
    }
};
exports.BlogService = BlogService;
exports.BlogService = BlogService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [blog_repository_1.BlogRepository])
], BlogService);
//# sourceMappingURL=blog.service.js.map