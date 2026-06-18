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
import { TeamService } from './team.service';
import { CreateTeamDto, UpdateTeamDto } from './dtos/team.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { multerConfig, getFileUrl } from '../../common/config/multer.config';

@Controller('api')
export class TeamController {
  constructor(private teamService: TeamService) {}

  // ─── Public routes ───────────────────────────────────────────────────────────

  @Get('team')
  async findAll(@Query('skip') skip = 0, @Query('take') take = 50) {
    const team = await this.teamService.findActive(+skip, +take);
    const total = await this.teamService.countAll();
    return { data: team, total };
  }

  // ─── Admin routes ─────────────────────────────────────────────────────────────

  @Post('admin/team')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('profileImage', multerConfig))
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() createTeamDto: CreateTeamDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (file) {
      createTeamDto.profileImage = getFileUrl(file);
    }
    return this.teamService.create(createTeamDto);
  }

  @Get('admin/team')
  @UseGuards(JwtAuthGuard)
  async findAllAdmin(@Query('skip') skip = 0, @Query('take') take = 50) {
    const team = await this.teamService.findAll(+skip, +take);
    const total = await this.teamService.countAll();
    return { data: team, total };
  }

  @Get('admin/team/:id')
  @UseGuards(JwtAuthGuard)
  async findByIdAdmin(@Param('id', ParseIntPipe) id: number) {
    return this.teamService.findById(id);
  }

  @Put('admin/team/:id')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('profileImage', multerConfig))
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTeamDto: UpdateTeamDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (file) {
      updateTeamDto.profileImage = getFileUrl(file);
    }
    return this.teamService.update(id, updateTeamDto);
  }

  @Delete('admin/team/:id')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.teamService.delete(id);
  }
}
