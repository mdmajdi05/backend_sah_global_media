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
exports.BlogController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const blog_service_1 = require("./blog.service");
const blog_dto_1 = require("./dtos/blog.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const multer_config_1 = require("../../common/config/multer.config");
let BlogController = class BlogController {
    blogService;
    constructor(blogService) {
        this.blogService = blogService;
    }
    async findAll(skip = 0, take = 10, category) {
        const cat = category || undefined;
        const blogs = await this.blogService.findPublished(+skip, +take, cat);
        const total = await this.blogService.countPublished(cat);
        return { data: blogs, total };
    }
    async findRelated(slug, category = '') {
        if (!category)
            return [];
        return this.blogService.findRelated(slug, category, 3);
    }
    async getCategories() {
        return this.blogService.getDistinctCategories();
    }
    async findBySlug(slug) {
        return this.blogService.findBySlug(slug);
    }
    async create(createBlogDto, file) {
        if (file) {
            createBlogDto.featuredImage = (0, multer_config_1.getFileUrl)(file);
        }
        return this.blogService.create(createBlogDto);
    }
    async findAllAdmin(skip = 0, take = 10) {
        const blogs = await this.blogService.findAll(+skip, +take);
        const total = await this.blogService.countAll();
        return { data: blogs, total };
    }
    async findByIdAdmin(id) {
        return this.blogService.findById(id);
    }
    async update(id, updateBlogDto, file) {
        if (file) {
            updateBlogDto.featuredImage = (0, multer_config_1.getFileUrl)(file);
        }
        return this.blogService.update(id, updateBlogDto);
    }
    async delete(id) {
        await this.blogService.delete(id);
    }
};
exports.BlogController = BlogController;
__decorate([
    (0, common_1.Get)('blog'),
    __param(0, (0, common_1.Query)('skip')),
    __param(1, (0, common_1.Query)('take')),
    __param(2, (0, common_1.Query)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('blog/:slug/related'),
    __param(0, (0, common_1.Param)('slug')),
    __param(1, (0, common_1.Query)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "findRelated", null);
__decorate([
    (0, common_1.Get)('blog-categories'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "getCategories", null);
__decorate([
    (0, common_1.Get)('blog/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "findBySlug", null);
__decorate([
    (0, common_1.Post)('admin/blog'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('featuredImage', multer_config_1.multerConfig)),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [blog_dto_1.CreateBlogDto, Object]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('admin/blog'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Query)('skip')),
    __param(1, (0, common_1.Query)('take')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "findAllAdmin", null);
__decorate([
    (0, common_1.Get)('admin/blog/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "findByIdAdmin", null);
__decorate([
    (0, common_1.Put)('admin/blog/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('featuredImage', multer_config_1.multerConfig)),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, blog_dto_1.UpdateBlogDto, Object]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('admin/blog/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "delete", null);
exports.BlogController = BlogController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [blog_service_1.BlogService])
], BlogController);
//# sourceMappingURL=blog.controller.js.map