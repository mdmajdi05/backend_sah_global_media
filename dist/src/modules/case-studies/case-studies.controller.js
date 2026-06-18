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
exports.CaseStudyController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const case_studies_service_1 = require("./case-studies.service");
const case_study_dto_1 = require("./dtos/case-study.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const multer_config_1 = require("../../common/config/multer.config");
let CaseStudyController = class CaseStudyController {
    caseStudyService;
    constructor(caseStudyService) {
        this.caseStudyService = caseStudyService;
    }
    async findAll(skip = 0, take = 10) {
        const caseStudies = await this.caseStudyService.findActive(+skip, +take);
        const total = await this.caseStudyService.countAll();
        return { data: caseStudies, total };
    }
    async create(createCaseStudyDto, file) {
        if (file) {
            createCaseStudyDto.image = (0, multer_config_1.getFileUrl)(file);
        }
        return this.caseStudyService.create(createCaseStudyDto);
    }
    async findAllAdmin(skip = 0, take = 10) {
        const caseStudies = await this.caseStudyService.findAll(+skip, +take);
        const total = await this.caseStudyService.countAll();
        return { data: caseStudies, total };
    }
    async findByIdAdmin(id) {
        return this.caseStudyService.findById(id);
    }
    async update(id, updateCaseStudyDto, file) {
        if (file) {
            updateCaseStudyDto.image = (0, multer_config_1.getFileUrl)(file);
        }
        return this.caseStudyService.update(id, updateCaseStudyDto);
    }
    async delete(id) {
        await this.caseStudyService.delete(id);
    }
};
exports.CaseStudyController = CaseStudyController;
__decorate([
    (0, common_1.Get)('case-studies'),
    __param(0, (0, common_1.Query)('skip')),
    __param(1, (0, common_1.Query)('take')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CaseStudyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('admin/case-studies'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', multer_config_1.multerConfig)),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [case_study_dto_1.CreateCaseStudyDto, Object]),
    __metadata("design:returntype", Promise)
], CaseStudyController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('admin/case-studies'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Query)('skip')),
    __param(1, (0, common_1.Query)('take')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CaseStudyController.prototype, "findAllAdmin", null);
__decorate([
    (0, common_1.Get)('admin/case-studies/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CaseStudyController.prototype, "findByIdAdmin", null);
__decorate([
    (0, common_1.Put)('admin/case-studies/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', multer_config_1.multerConfig)),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, case_study_dto_1.UpdateCaseStudyDto, Object]),
    __metadata("design:returntype", Promise)
], CaseStudyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('admin/case-studies/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CaseStudyController.prototype, "delete", null);
exports.CaseStudyController = CaseStudyController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [case_studies_service_1.CaseStudyService])
], CaseStudyController);
//# sourceMappingURL=case-studies.controller.js.map