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
exports.CaseStudyService = void 0;
const common_1 = require("@nestjs/common");
const case_study_repository_1 = require("./repositories/case-study.repository");
let CaseStudyService = class CaseStudyService {
    caseStudyRepository;
    constructor(caseStudyRepository) {
        this.caseStudyRepository = caseStudyRepository;
    }
    async create(createCaseStudyDto) {
        return this.caseStudyRepository.create(createCaseStudyDto);
    }
    async findAll(skip = 0, take = 10) {
        return this.caseStudyRepository.findAll(skip, take);
    }
    async findById(id) {
        const caseStudy = await this.caseStudyRepository.findById(id);
        if (!caseStudy) {
            throw new common_1.NotFoundException(`Case study with id ${id} not found`);
        }
        return caseStudy;
    }
    async findActive(skip = 0, take = 10) {
        return this.caseStudyRepository.findActive(skip, take);
    }
    async update(id, updateCaseStudyDto) {
        const caseStudy = await this.caseStudyRepository.findById(id);
        if (!caseStudy) {
            throw new common_1.NotFoundException(`Case study with id ${id} not found`);
        }
        return this.caseStudyRepository.update(id, updateCaseStudyDto);
    }
    async delete(id) {
        const caseStudy = await this.caseStudyRepository.findById(id);
        if (!caseStudy) {
            throw new common_1.NotFoundException(`Case study with id ${id} not found`);
        }
        return this.caseStudyRepository.delete(id);
    }
    async countAll() {
        return this.caseStudyRepository.countAll();
    }
};
exports.CaseStudyService = CaseStudyService;
exports.CaseStudyService = CaseStudyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [case_study_repository_1.CaseStudyRepository])
], CaseStudyService);
//# sourceMappingURL=case-studies.service.js.map