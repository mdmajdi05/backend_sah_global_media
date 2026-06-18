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
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { SettingsService } from './settings.service';
import { CreateSettingDto, UpdateSettingDto } from './dtos/setting.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { multerConfig, getFileUrl } from '../../common/config/multer.config';

@Controller('api')
export class SettingsController {
  constructor(private settingsService: SettingsService) {}

  // ─── Public route ─────────────────────────────────────────────────────────────

  @Get('settings/public')
  async getPublicSettings() {
    return this.settingsService.getPublicSettings();
  }

  // ─── Admin routes ─────────────────────────────────────────────────────────────

  @Post('admin/settings')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createSettingDto: CreateSettingDto) {
    return this.settingsService.create(createSettingDto);
  }

  @Get('admin/settings')
  @UseGuards(JwtAuthGuard)
  async findAll(@Query('skip') skip = 0, @Query('take') take = 100) {
    const settings = await this.settingsService.findAll(+skip, +take);
    const total = await this.settingsService.countAll();
    return { data: settings, total };
  }

  @Get('admin/settings/:key')
  @UseGuards(JwtAuthGuard)
  async findByKey(@Param('key') key: string) {
    return this.settingsService.findByKey(key);
  }

  @Put('admin/settings/:key')
  @UseGuards(JwtAuthGuard)
  async update(@Param('key') key: string, @Body() updateSettingDto: UpdateSettingDto) {
    return this.settingsService.upsert(key, updateSettingDto);
  }

  @Put('admin/settings/:key/upload')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file', multerConfig))
  async uploadImage(
    @Param('key') key: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const url = getFileUrl(file);
    const type = file.mimetype?.startsWith('video/') ? 'text' : 'image';
    return this.settingsService.upsert(key, { value: url, type });
  }

  @Delete('admin/settings/:key')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('key') key: string) {
    return this.settingsService.delete(key);
  }

  @Post('admin/settings/seed')
  @UseGuards(JwtAuthGuard)
  async seedDefaults() {
    return this.settingsService.seedDefaults();
  }
}
