import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class SettingRepository {
  constructor(private prismaService: PrismaService) {}

  async create(data: any) {
    return this.prismaService.websiteSetting.create({ data });
  }

  async findAll(skip: number = 0, take: number = 10) {
    return this.prismaService.websiteSetting.findMany({
      skip,
      take,
      orderBy: { key: 'asc' },
    });
  }

  async findByKey(key: string) {
    return this.prismaService.websiteSetting.findUnique({ where: { key } });
  }

  async update(key: string, data: any) {
    return this.prismaService.websiteSetting.update({
      where: { key },
      data,
    });
  }

  async upsert(key: string, data: any) {
    return this.prismaService.websiteSetting.upsert({
      where: { key },
      create: { key, ...data },
      update: data,
    });
  }

  async delete(key: string) {
    await this.prismaService.websiteSetting.delete({ where: { key } });
  }

  async countAll() {
    return this.prismaService.websiteSetting.count();
  }

  async getPublicSettings() {
    // All settings are public — no sensitive data stored in WebsiteSetting
    const settings = await this.prismaService.websiteSetting.findMany();

    const result: Record<string, string | null> = {};
    settings.forEach((setting) => {
      result[setting.key] = setting.value;
    });

    return result;
  }
}