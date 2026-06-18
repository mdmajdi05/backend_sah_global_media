"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseStudyModule = void 0;
const common_1 = require("@nestjs/common");
const case_studies_service_1 = require("./case-studies.service");
const case_studies_controller_1 = require("./case-studies.controller");
const case_study_repository_1 = require("./repositories/case-study.repository");
const prisma_service_1 = require("../../prisma/prisma.service");
let CaseStudyModule = class CaseStudyModule {
};
exports.CaseStudyModule = CaseStudyModule;
exports.CaseStudyModule = CaseStudyModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [case_studies_service_1.CaseStudyService, case_study_repository_1.CaseStudyRepository, prisma_service_1.PrismaService],
        controllers: [case_studies_controller_1.CaseStudyController],
        exports: [case_studies_service_1.CaseStudyService],
    })
], CaseStudyModule);
//# sourceMappingURL=case-studies.module.js.map