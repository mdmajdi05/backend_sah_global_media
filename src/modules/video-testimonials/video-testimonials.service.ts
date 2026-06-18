import { Injectable, NotFoundException } from '@nestjs/common';
import { VideoTestimonialRepository } from './repositories/video-testimonial.repository';

@Injectable()
export class VideoTestimonialsService {
  constructor(private repo: VideoTestimonialRepository) {}

  findAll(skip = 0, take = 50) {
    return this.repo.findAll(skip, take);
  }

  findActive(skip = 0, take = 20) {
    return this.repo.findActive(skip, take);
  }

  async findById(id: number) {
    const item = await this.repo.findById(id);
    if (!item) throw new NotFoundException(`VideoTestimonial #${id} not found`);
    return item;
  }

  countAll() {
    return this.repo.countAll();
  }

  create(data: any) {
    return this.repo.create(data);
  }

  async update(id: number, data: any) {
    await this.findById(id);
    return this.repo.update(id, data);
  }

  async delete(id: number) {
    await this.findById(id);
    return this.repo.delete(id);
  }
}
