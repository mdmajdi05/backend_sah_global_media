import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UserController } from './users.controller';
import { UserRepository } from './repositories/user.repository';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [],
  providers: [UserService, UserRepository, PrismaService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}