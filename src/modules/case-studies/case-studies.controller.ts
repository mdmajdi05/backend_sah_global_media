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
import { CaseStudyService } from './case-studies.service';
import { CreateCaseStudyDto, UpdateCaseStudyDto } from './dtos/case-study.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { multerConfig, getFileUrl } from '../../common/config/multer.config';

@Controller('api')
export class CaseStudyController {
  constructor(private caseStudyService: CaseStudyService) {}

  // ─── Public routes ───────────────────────────────────────────────────────────

  @Get('case-studies')
  async findAll(@Query('skip') skip = 0, @Query('take') take = 10) {
    const caseStudies = await this.caseStudyService.findActive(+skip, +take);
    const total = await this.caseStudyService.countAll();
    return { data: caseStudies, total };
  }

  // ─── Admin routes ─────────────────────────────────────────────────────────────

  @Post('admin/case-studies')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('image', multerConfig))
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() createCaseStudyDto: CreateCaseStudyDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (file) {
      createCaseStudyDto.image = getFileUrl(file);
    }
    return this.caseStudyService.create(createCaseStudyDto);
  }

  @Get('admin/case-studies')
  @UseGuards(JwtAuthGuard)
  async findAllAdmin(@Query('skip') skip = 0, @Query('take') take = 10) {
    const caseStudies = await this.caseStudyService.findAll(+skip, +take);
    const total = await this.caseStudyService.countAll();
    return { data: caseStudies, total };
  }

  @Get('admin/case-studies/:id')
  @UseGuards(JwtAuthGuard)
  async findByIdAdmin(@Param('id', ParseIntPipe) id: number) {
    return this.caseStudyService.findById(id);
  }

  @Put('admin/case-studies/:id')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('image', multerConfig))
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCaseStudyDto: UpdateCaseStudyDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (file) {
      updateCaseStudyDto.image = getFileUrl(file);
    }
    return this.caseStudyService.update(id, updateCaseStudyDto);
  }

  @Delete('admin/case-studies/:id')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.caseStudyService.delete(id);
  }
}
