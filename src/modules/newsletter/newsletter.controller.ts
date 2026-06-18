import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Query,
  UseGuards,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { NewsletterService } from './newsletter.service';
import { SubscribeNewsletterDto } from './dtos/newsletter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('api')
export class NewsletterController {
  constructor(private newsletterService: NewsletterService) {}

  // Public route
  @Post('newsletter')
  @HttpCode(HttpStatus.CREATED)
  async subscribe(@Body() subscribeDto: SubscribeNewsletterDto) {
    return this.newsletterService.subscribe(subscribeDto.email);
  }

  // Admin routes
  @Get('admin/newsletter')
  @UseGuards(JwtAuthGuard)
  async findAll(@Query('skip') skip = 0, @Query('take') take = 10) {
    const subscribers = await this.newsletterService.findAll(+skip, +take);
    const total = await this.newsletterService.countAll();
    return { data: subscribers, total };
  }

  @Delete('admin/newsletter/:id')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.newsletterService.delete(id);
  }
}