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
import { ClientService } from './clients.service';
import { CreateClientDto, UpdateClientDto } from './dtos/client.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { multerConfig, getFileUrl } from '../../common/config/multer.config';

@Controller('api')
export class ClientController {
  constructor(private clientService: ClientService) {}

  // ─── Public routes ───────────────────────────────────────────────────────────

  @Get('clients')
  async findAll(@Query('skip') skip = 0, @Query('take') take = 50) {
    const clients = await this.clientService.findActive(+skip, +take);
    const total = await this.clientService.countAll();
    return { data: clients, total };
  }

  // ─── Admin routes ─────────────────────────────────────────────────────────────

  @Post('admin/clients')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('logoUrl', multerConfig))
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() createClientDto: CreateClientDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (file) {
      createClientDto.logoUrl = getFileUrl(file);
    }
    return this.clientService.create(createClientDto);
  }

  @Get('admin/clients')
  @UseGuards(JwtAuthGuard)
  async findAllAdmin(@Query('skip') skip = 0, @Query('take') take = 50) {
    const clients = await this.clientService.findAll(+skip, +take);
    const total = await this.clientService.countAll();
    return { data: clients, total };
  }

  @Get('admin/clients/:id')
  @UseGuards(JwtAuthGuard)
  async findByIdAdmin(@Param('id', ParseIntPipe) id: number) {
    return this.clientService.findById(id);
  }

  @Put('admin/clients/:id')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('logoUrl', multerConfig))
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateClientDto: UpdateClientDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (file) {
      updateClientDto.logoUrl = getFileUrl(file);
    }
    return this.clientService.update(id, updateClientDto);
  }

  @Delete('admin/clients/:id')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.clientService.delete(id);
  }
}
