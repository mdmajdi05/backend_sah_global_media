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
exports.TeamController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const team_service_1 = require("./team.service");
const team_dto_1 = require("./dtos/team.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const multer_config_1 = require("../../common/config/multer.config");
let TeamController = class TeamController {
    teamService;
    constructor(teamService) {
        this.teamService = teamService;
    }
    async findAll(skip = 0, take = 50) {
        const team = await this.teamService.findActive(+skip, +take);
        const total = await this.teamService.countAll();
        return { data: team, total };
    }
    async create(createTeamDto, file) {
        if (file) {
            createTeamDto.profileImage = (0, multer_config_1.getFileUrl)(file);
        }
        return this.teamService.create(createTeamDto);
    }
    async findAllAdmin(skip = 0, take = 50) {
        const team = await this.teamService.findAll(+skip, +take);
        const total = await this.teamService.countAll();
        return { data: team, total };
    }
    async findByIdAdmin(id) {
        return this.teamService.findById(id);
    }
    async update(id, updateTeamDto, file) {
        if (file) {
            updateTeamDto.profileImage = (0, multer_config_1.getFileUrl)(file);
        }
        return this.teamService.update(id, updateTeamDto);
    }
    async delete(id) {
        await this.teamService.delete(id);
    }
};
exports.TeamController = TeamController;
__decorate([
    (0, common_1.Get)('team'),
    __param(0, (0, common_1.Query)('skip')),
    __param(1, (0, common_1.Query)('take')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('admin/team'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('profileImage', multer_config_1.multerConfig)),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [team_dto_1.CreateTeamDto, Object]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('admin/team'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Query)('skip')),
    __param(1, (0, common_1.Query)('take')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "findAllAdmin", null);
__decorate([
    (0, common_1.Get)('admin/team/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "findByIdAdmin", null);
__decorate([
    (0, common_1.Put)('admin/team/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('profileImage', multer_config_1.multerConfig)),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, team_dto_1.UpdateTeamDto, Object]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('admin/team/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "delete", null);
exports.TeamController = TeamController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [team_service_1.TeamService])
], TeamController);
//# sourceMappingURL=team.controller.js.map