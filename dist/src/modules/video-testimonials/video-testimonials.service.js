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
exports.VideoTestimonialsService = void 0;
const common_1 = require("@nestjs/common");
const video_testimonial_repository_1 = require("./repositories/video-testimonial.repository");
let VideoTestimonialsService = class VideoTestimonialsService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    findAll(skip = 0, take = 50) {
        return this.repo.findAll(skip, take);
    }
    findActive(skip = 0, take = 20) {
        return this.repo.findActive(skip, take);
    }
    async findById(id) {
        const item = await this.repo.findById(id);
        if (!item)
            throw new common_1.NotFoundException(`VideoTestimonial #${id} not found`);
        return item;
    }
    countAll() {
        return this.repo.countAll();
    }
    create(data) {
        return this.repo.create(data);
    }
    async update(id, data) {
        await this.findById(id);
        return this.repo.update(id, data);
    }
    async delete(id) {
        await this.findById(id);
        return this.repo.delete(id);
    }
};
exports.VideoTestimonialsService = VideoTestimonialsService;
exports.VideoTestimonialsService = VideoTestimonialsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [video_testimonial_repository_1.VideoTestimonialRepository])
], VideoTestimonialsService);
//# sourceMappingURL=video-testimonials.service.js.map