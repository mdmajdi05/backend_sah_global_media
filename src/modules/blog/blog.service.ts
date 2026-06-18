import { Injectable, NotFoundException } from '@nestjs/common';
import { BlogRepository } from './repositories/blog.repository';
import { CreateBlogDto, UpdateBlogDto } from './dtos/blog.dto';

@Injectable()
export class BlogService {
  constructor(private blogRepository: BlogRepository) {}

  async create(createBlogDto: CreateBlogDto) {
    return this.blogRepository.create(createBlogDto);
  }

  async findAll(skip = 0, take = 10) {
    return this.blogRepository.findAll(skip, take);
  }

  async findById(id: number) {
    const blog = await this.blogRepository.findById(id);
    if (!blog) throw new NotFoundException(`Blog #${id} not found`);
    return blog;
  }

  async findBySlug(slug: string) {
    const blog = await this.blogRepository.findBySlug(slug);
    if (!blog) throw new NotFoundException(`Blog '${slug}' not found`);
    return blog;
  }

  async findPublished(skip = 0, take = 10, category?: string) {
    return this.blogRepository.findPublished(skip, take, category);
  }

  async findRelated(currentSlug: string, category: string, take = 3) {
    return this.blogRepository.findRelated(currentSlug, category, take);
  }

  async getDistinctCategories() {
    return this.blogRepository.getDistinctCategories();
  }

  async update(id: number, updateBlogDto: UpdateBlogDto) {
    await this.findById(id);
    return this.blogRepository.update(id, updateBlogDto);
  }

  async delete(id: number) {
    await this.findById(id);
    return this.blogRepository.delete(id);
  }

  async countAll() {
    return this.blogRepository.countAll();
  }

  async countPublished(category?: string) {
    return this.blogRepository.countPublished(category);
  }
}
