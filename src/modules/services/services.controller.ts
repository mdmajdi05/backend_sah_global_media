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
import { ServiceService } from './services.service';
import {
  CreateServiceCategoryDto,
  UpdateServiceCategoryDto,
  CreateSubServiceDto,
  UpdateSubServiceDto,
} from './dtos/service.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('api')
export class ServiceController {
  constructor(private serviceService: ServiceService) {}

  // Public routes
  @Get('services')
  async findAllCategories() {
    return this.serviceService.findActiveCategories(0, 100);
  }

  // Admin routes - ServiceCategory
  @Post('admin/services')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.CREATED)
  async createCategory(@Body() createCategoryDto: CreateServiceCategoryDto) {
    return this.serviceService.createCategory(createCategoryDto);
  }

  @Get('admin/services')
  @UseGuards(JwtAuthGuard)
  async findAllCategoriesAdmin(@Query('skip') skip = 0, @Query('take') take = 10) {
    const categories = await this.serviceService.findAllCategories(+skip, +take);
    const total = await this.serviceService.countCategories();
    return { data: categories, total };
  }

  @Get('admin/services/:id')
  @UseGuards(JwtAuthGuard)
  async findCategoryById(@Param('id', ParseIntPipe) id: number) {
    return this.serviceService.findCategoryById(id);
  }

  @Put('admin/services/:id')
  @UseGuards(JwtAuthGuard)
  async updateCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCategoryDto: UpdateServiceCategoryDto,
  ) {
    return this.serviceService.updateCategory(id, updateCategoryDto);
  }

  @Delete('admin/services/:id')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteCategory(@Param('id', ParseIntPipe) id: number) {
    return this.serviceService.deleteCategory(id);
  }

  // Admin routes - SubService
  @Post('admin/sub-services')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.CREATED)
  async createSubService(@Body() createSubServiceDto: CreateSubServiceDto) {
    return this.serviceService.createSubService(createSubServiceDto);
  }

  @Get('admin/sub-services')
  @UseGuards(JwtAuthGuard)
  async findAllSubServicesAdmin(@Query('skip') skip = 0, @Query('take') take = 10) {
    const subServices = await this.serviceService.findAllSubServices(+skip, +take);
    const total = await this.serviceService.countSubServices();
    return { data: subServices, total };
  }

  @Get('admin/sub-services/:id')
  @UseGuards(JwtAuthGuard)
  async findSubServiceById(@Param('id', ParseIntPipe) id: number) {
    return this.serviceService.findSubServiceById(id);
  }

  @Get('admin/services/:categoryId/sub-services')
  @UseGuards(JwtAuthGuard)
  async findSubServicesByCategory(
    @Param('categoryId', ParseIntPipe) categoryId: number,
    @Query('skip') skip = 0,
    @Query('take') take = 10,
  ) {
    return this.serviceService.findSubServicesByCategoryId(categoryId, +skip, +take);
  }

  @Put('admin/sub-services/:id')
  @UseGuards(JwtAuthGuard)
  async updateSubService(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSubServiceDto: UpdateSubServiceDto,
  ) {
    return this.serviceService.updateSubService(id, updateSubServiceDto);
  }

  @Delete('admin/sub-services/:id')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteSubService(@Param('id', ParseIntPipe) id: number) {
    return this.serviceService.deleteSubService(id);
  }
}