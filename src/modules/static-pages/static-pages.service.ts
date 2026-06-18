import { Injectable } from '@nestjs/common';
import { StaticPageRepository } from './repositories/static-page.repository';

@Injectable()
export class StaticPagesService {
  constructor(private repo: StaticPageRepository) {}

  findAll() {
    return this.repo.findAll();
  }

  findBySlug(slug: string) {
    return this.repo.findBySlug(slug);
  }

  upsert(slug: string, data: { title?: string; content?: string }) {
    return this.repo.upsert(slug, data);
  }
}
