"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoTestimonialsModule = void 0;
const common_1 = require("@nestjs/common");
const video_testimonials_controller_1 = require("./video-testimonials.controller");
const video_testimonials_service_1 = require("./video-testimonials.service");
const video_testimonial_repository_1 = require("./repositories/video-testimonial.repository");
const prisma_service_1 = require("../../prisma/prisma.service");
let VideoTestimonialsModule = class VideoTestimonialsModule {
};
exports.VideoTestimonialsModule = VideoTestimonialsModule;
exports.VideoTestimonialsModule = VideoTestimonialsModule = __decorate([
    (0, common_1.Module)({
        controllers: [video_testimonials_controller_1.VideoTestimonialsController],
        providers: [video_testimonials_service_1.VideoTestimonialsService, video_testimonial_repository_1.VideoTestimonialRepository, prisma_service_1.PrismaService],
    })
], VideoTestimonialsModule);
//# sourceMappingURL=video-testimonials.module.js.map