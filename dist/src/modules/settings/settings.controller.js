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
exports.SettingsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const settings_service_1 = require("./settings.service");
const setting_dto_1 = require("./dtos/setting.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const multer_config_1 = require("../../common/config/multer.config");
let SettingsController = class SettingsController {
    settingsService;
    constructor(settingsService) {
        this.settingsService = settingsService;
    }
    async getPublicSettings() {
        return this.settingsService.getPublicSettings();
    }
    async create(createSettingDto) {
        return this.settingsService.create(createSettingDto);
    }
    async findAll(skip = 0, take = 100) {
        const settings = await this.settingsService.findAll(+skip, +take);
        const total = await this.settingsService.countAll();
        return { data: settings, total };
    }
    async findByKey(key) {
        return this.settingsService.findByKey(key);
    }
    async update(key, updateSettingDto) {
        return this.settingsService.upsert(key, updateSettingDto);
    }
    async uploadImage(key, file) {
        const url = (0, multer_config_1.getFileUrl)(file);
        const type = file.mimetype?.startsWith('video/') ? 'text' : 'image';
        return this.settingsService.upsert(key, { value: url, type });
    }
    async delete(key) {
        return this.settingsService.delete(key);
    }
    async seedDefaults() {
        return this.settingsService.seedDefaults();
    }
};
exports.SettingsController = SettingsController;
__decorate([
    (0, common_1.Get)('settings/public'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "getPublicSettings", null);
__decorate([
    (0, common_1.Post)('admin/settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [setting_dto_1.CreateSettingDto]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('admin/settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Query)('skip')),
    __param(1, (0, common_1.Query)('take')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('admin/settings/:key'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "findByKey", null);
__decorate([
    (0, common_1.Put)('admin/settings/:key'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('key')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, setting_dto_1.UpdateSettingDto]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "update", null);
__decorate([
    (0, common_1.Put)('admin/settings/:key/upload'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', multer_config_1.multerConfig)),
    __param(0, (0, common_1.Param)('key')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "uploadImage", null);
__decorate([
    (0, common_1.Delete)('admin/settings/:key'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)('admin/settings/seed'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "seedDefaults", null);
exports.SettingsController = SettingsController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [settings_service_1.SettingsService])
], SettingsController);
//# sourceMappingURL=settings.controller.js.map