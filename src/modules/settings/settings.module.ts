import { Module } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { SettingsController } from './settings.controller';
import { SettingRepository } from './repositories/setting.repository';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [],
  providers: [SettingsService, SettingRepository, PrismaService],
  controllers: [SettingsController],
  exports: [SettingsService],
})
export class SettingsModule {}