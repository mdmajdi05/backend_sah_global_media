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
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { PricingService } from './pricing.service';
import { CreatePricingDto, UpdatePricingDto } from './dtos/pricing.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('api')
export class PricingController {
  constructor(private pricingService: PricingService) {}

  // Public routes
  @Get('pricing')
  async findAll(@Query('skip') skip = 0, @Query('take') take = 10) {
    const pricing = await this.pricingService.findActive(+skip, +take);
    const total = await this.pricingService.countAll();
    return { data: pricing, total };
  }

  // Admin routes
  @Post('admin/pricing')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createPricingDto: CreatePricingDto) {
    return this.pricingService.create(createPricingDto);
  }

  @Get('admin/pricing')
  @UseGuards(JwtAuthGuard)
  async findAllAdmin(@Query('skip') skip = 0, @Query('take') take = 10) {
    const pricing = await this.pricingService.findAll(+skip, +take);
    const total = await this.pricingService.countAll();
    return { data: pricing, total };
  }

  @Get('admin/pricing/:id')
  @UseGuards(JwtAuthGuard)
  async findByIdAdmin(@Param('id', ParseIntPipe) id: number) {
    return this.pricingService.findById(id);
  }

  @Put('admin/pricing/:id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id', ParseIntPipe) id: number, @Body() updatePricingDto: UpdatePricingDto) {
    return this.pricingService.update(id, updatePricingDto);
  }

  @Delete('admin/pricing/:id')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.pricingService.delete(id);
  }
}