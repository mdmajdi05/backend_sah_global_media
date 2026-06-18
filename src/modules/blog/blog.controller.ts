import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { BlogService } from './blog.service';
import { CreateBlogDto, UpdateBlogDto } from './dtos/blog.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { multerConfig, getFileUrl } from '../../common/config/multer.config';

@Controller('api')
export class BlogController {
  constructor(private blogService: BlogService) {}

  // ─── Public routes ───────────────────────────────────────────────────────────

  @Get('blog')
  async findAll(
    @Query('skip') skip = 0,
    @Query('take') take = 10,
    @Query('category') category?: string,
  ) {
    const cat = category || undefined;
    const blogs = await this.blogService.findPublished(+skip, +take, cat);
    const total = await this.blogService.countPublished(cat);
    return { data: blogs, total };
  }

  @Get('blog/:slug/related')
  async findRelated(@Param('slug') slug: string, @Query('category') category = '') {
    if (!category) return [];
    return this.blogService.findRelated(slug, category, 3);
  }

  @Get('blog-categories')
  async getCategories() {
    return this.blogService.getDistinctCategories();
  }

  @Get('blog/:slug')
  async findBySlug(@Param('slug') slug: string) {
    return this.blogService.findBySlug(slug);
  }

  // ─── Admin routes ─────────────────────────────────────────────────────────────

  @Post('admin/blog')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('featuredImage', multerConfig))
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() createBlogDto: CreateBlogDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (file) {
      createBlogDto.featuredImage = getFileUrl(file);
    }
    return this.blogService.create(createBlogDto);
  }

  @Get('admin/blog')
  @UseGuards(JwtAuthGuard)
  async findAllAdmin(@Query('skip') skip = 0, @Query('take') take = 10) {
    const blogs = await this.blogService.findAll(+skip, +take);
    const total = await this.blogService.countAll();
    return { data: blogs, total };
  }

  @Get('admin/blog/:id')
  @UseGuards(JwtAuthGuard)
  async findByIdAdmin(@Param('id', ParseIntPipe) id: number) {
    return this.blogService.findById(id);
  }

  @Put('admin/blog/:id')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('featuredImage', multerConfig))
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBlogDto: UpdateBlogDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (file) {
      updateBlogDto.featuredImage = getFileUrl(file);
    }
    return this.blogService.update(id, updateBlogDto);
  }

  @Delete('admin/blog/:id')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.blogService.delete(id);
  }
}
