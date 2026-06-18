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
import { ContactService } from './contact.service';
import { CreateContactDto } from './dtos/contact.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('api')
export class ContactController {
  constructor(private contactService: ContactService) {}

  // Public route
  @Post('contact')
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createContactDto: CreateContactDto) {
    return this.contactService.create(createContactDto);
  }

  // Admin routes
  @Get('admin/contacts')
  @UseGuards(JwtAuthGuard)
  async findAll(@Query('skip') skip = 0, @Query('take') take = 10) {
    const contacts = await this.contactService.findAll(+skip, +take);
    const total = await this.contactService.countAll();
    return { data: contacts, total };
  }

  @Get('admin/contacts/:id')
  @UseGuards(JwtAuthGuard)
  async findById(@Param('id', ParseIntPipe) id: number) {
    return this.contactService.findById(id);
  }

  @Put('admin/contacts/:id/read')
  @UseGuards(JwtAuthGuard)
  async markAsRead(@Param('id', ParseIntPipe) id: number) {
    return this.contactService.markAsRead(id);
  }

  @Delete('admin/contacts/:id')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.contactService.delete(id);
  }

  @Get('admin/contacts/unread/list')
  @UseGuards(JwtAuthGuard)
  async findUnread() {
    return this.contactService.findUnread();
  }
}