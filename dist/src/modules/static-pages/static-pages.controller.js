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
exports.StaticPagesController = void 0;
const common_1 = require("@nestjs/common");
const static_pages_service_1 = require("./static-pages.service");
const static_page_dto_1 = require("./dtos/static-page.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
let StaticPagesController = class StaticPagesController {
    service;
    constructor(service) {
        this.service = service;
    }
    getPage(slug) {
        return this.service.findBySlug(slug);
    }
    listPages() {
        return this.service.findAll();
    }
    updatePage(slug, dto) {
        return this.service.upsert(slug, dto);
    }
};
exports.StaticPagesController = StaticPagesController;
__decorate([
    (0, common_1.Get)('pages/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StaticPagesController.prototype, "getPage", null);
__decorate([
    (0, common_1.Get)('admin/pages'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StaticPagesController.prototype, "listPages", null);
__decorate([
    (0, common_1.Put)('admin/pages/:slug'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('slug')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, static_page_dto_1.UpdateStaticPageDto]),
    __metadata("design:returntype", void 0)
], StaticPagesController.prototype, "updatePage", null);
exports.StaticPagesController = StaticPagesController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [static_pages_service_1.StaticPagesService])
], StaticPagesController);
//# sourceMappingURL=static-pages.controller.js.map