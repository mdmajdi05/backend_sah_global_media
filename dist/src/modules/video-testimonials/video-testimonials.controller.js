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
exports.VideoTestimonialsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const video_testimonials_service_1 = require("./video-testimonials.service");
const video_testimonial_dto_1 = require("./dtos/video-testimonial.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const multer_config_1 = require("../../common/config/multer.config");
let VideoTestimonialsController = class VideoTestimonialsController {
    service;
    constructor(service) {
        this.service = service;
    }
    async findActive(skip = 0, take = 20) {
        const data = await this.service.findActive(+skip, +take);
        const total = await this.service.countAll();
        return { data, total };
    }
    async create(dto, file) {
        if (file)
            dto.thumbnail = (0, multer_config_1.getFileUrl)(file);
        return this.service.create(dto);
    }
    async findAll(skip = 0, take = 50) {
        const data = await this.service.findAll(+skip, +take);
        const total = await this.service.countAll();
        return { data, total };
    }
    async findById(id) {
        return this.service.findById(id);
    }
    async update(id, dto, file) {
        if (file)
            dto.thumbnail = (0, multer_config_1.getFileUrl)(file);
        return this.service.update(id, dto);
    }
    async delete(id) {
        await this.service.delete(id);
    }
};
exports.VideoTestimonialsController = VideoTestimonialsController;
__decorate([
    (0, common_1.Get)('video-testimonials'),
    __param(0, (0, common_1.Query)('skip')),
    __param(1, (0, common_1.Query)('take')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], VideoTestimonialsController.prototype, "findActive", null);
__decorate([
    (0, common_1.Post)('admin/video-testimonials'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('thumbnail', multer_config_1.multerConfig)),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [video_testimonial_dto_1.CreateVideoTestimonialDto, Object]),
    __metadata("design:returntype", Promise)
], VideoTestimonialsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('admin/video-testimonials'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Query)('skip')),
    __param(1, (0, common_1.Query)('take')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], VideoTestimonialsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('admin/video-testimonials/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VideoTestimonialsController.prototype, "findById", null);
__decorate([
    (0, common_1.Put)('admin/video-testimonials/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('thumbnail', multer_config_1.multerConfig)),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, video_testimonial_dto_1.UpdateVideoTestimonialDto, Object]),
    __metadata("design:returntype", Promise)
], VideoTestimonialsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('admin/video-testimonials/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VideoTestimonialsController.prototype, "delete", null);
exports.VideoTestimonialsController = VideoTestimonialsController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [video_testimonials_service_1.VideoTestimonialsService])
], VideoTestimonialsController);
//# sourceMappingURL=video-testimonials.controller.js.map