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
import { VideoTestimonialsService } from './video-testimonials.service';
import { CreateVideoTestimonialDto, UpdateVideoTestimonialDto } from './dtos/video-testimonial.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { multerConfig, getFileUrl } from '../../common/config/multer.config';

@Controller('api')
export class VideoTestimonialsController {
  constructor(private service: VideoTestimonialsService) {}

  // ─── Public ──────────────────────────────────────────────────────────────────

  @Get('video-testimonials')
  async findActive(@Query('skip') skip = 0, @Query('take') take = 20) {
    const data = await this.service.findActive(+skip, +take);
    const total = await this.service.countAll();
    return { data, total };
  }

  // ─── Admin ────────────────────────────────────────────────────────────────────

  @Post('admin/video-testimonials')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('thumbnail', multerConfig))
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() dto: CreateVideoTestimonialDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (file) dto.thumbnail = getFileUrl(file);
    return this.service.create(dto);
  }

  @Get('admin/video-testimonials')
  @UseGuards(JwtAuthGuard)
  async findAll(@Query('skip') skip = 0, @Query('take') take = 50) {
    const data = await this.service.findAll(+skip, +take);
    const total = await this.service.countAll();
    return { data, total };
  }

  @Get('admin/video-testimonials/:id')
  @UseGuards(JwtAuthGuard)
  async findById(@Param('id', ParseIntPipe) id: number) {
    return this.service.findById(id);
  }

  @Put('admin/video-testimonials/:id')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('thumbnail', multerConfig))
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateVideoTestimonialDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (file) dto.thumbnail = getFileUrl(file);
    return this.service.update(id, dto);
  }

  @Delete('admin/video-testimonials/:id')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.service.delete(id);
  }
}
