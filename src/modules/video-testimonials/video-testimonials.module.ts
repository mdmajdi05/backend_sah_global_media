import { Module } from '@nestjs/common';
import { VideoTestimonialsController } from './video-testimonials.controller';
import { VideoTestimonialsService } from './video-testimonials.service';
import { VideoTestimonialRepository } from './repositories/video-testimonial.repository';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [VideoTestimonialsController],
  providers: [VideoTestimonialsService, VideoTestimonialRepository, PrismaService],
})
export class VideoTestimonialsModule {}
