import {
  Controller, Get, Put, Param, Body, UseGuards,
} from '@nestjs/common';
import { StaticPagesService } from './static-pages.service';
import { UpdateStaticPageDto } from './dtos/static-page.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('api')
export class StaticPagesController {
  constructor(private service: StaticPagesService) {}

  // Public: read page content by slug
  @Get('pages/:slug')
  getPage(@Param('slug') slug: string) {
    return this.service.findBySlug(slug);
  }

  // Admin: list all static pages
  @Get('admin/pages')
  @UseGuards(JwtAuthGuard)
  listPages() {
    return this.service.findAll();
  }

  // Admin: create or update a page
  @Put('admin/pages/:slug')
  @UseGuards(JwtAuthGuard)
  updatePage(
    @Param('slug') slug: string,
    @Body() dto: UpdateStaticPageDto,
  ) {
    return this.service.upsert(slug, dto);
  }
}
